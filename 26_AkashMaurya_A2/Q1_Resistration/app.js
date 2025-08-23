const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const { body, validationResult } = require("express-validator");

const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Use memory storage to avoid saving files before validation
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("form", { errors: [], old: {} });
});

app.post(
  "/submit",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "otherPics", maxCount: 5 },
  ]),
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters"),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
    body("email").isEmail().withMessage("Invalid email"),
    body("gender").notEmpty().withMessage("Gender is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Validation failed, don't save files
      return res.render("form", {
        errors: errors.array(),
        old: req.body,
      });
    }

    // Validation passed -> save files to disk now
    const uploadDir = path.join(__dirname, "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Helper to generate unique filename
    function uniqueFileName(originalName) {
      return Date.now() + "-" + Math.round(Math.random() * 1e9) + "-" + originalName;
    }

    let profilePicFilename = "";
    if (req.files["profilePic"]) {
      const profilePic = req.files["profilePic"][0];
      profilePicFilename = uniqueFileName(profilePic.originalname);
      fs.writeFileSync(
        path.join(uploadDir, profilePicFilename),
        profilePic.buffer
      );
    }

    let otherPicsFilenames = [];
    if (req.files["otherPics"]) {
      otherPicsFilenames = req.files["otherPics"].map((file) => {
        const filename = uniqueFileName(file.originalname);
        fs.writeFileSync(path.join(uploadDir, filename), file.buffer);
        return filename;
      });
    }

    const userData = {
      username: req.body.username,
      email: req.body.email,
      gender: req.body.gender,
      hobbies: Array.isArray(req.body.hobbies)
        ? req.body.hobbies
        : req.body.hobbies
        ? [req.body.hobbies]
        : [],
      profilePic: profilePicFilename,
      otherPics: otherPicsFilenames,
    };
    res.render("success", { user: userData });
  }
);

// Download route
app.get("/download/:filename", (req, res) => {
  const file = path.join(__dirname, "public/uploads", req.params.filename);
  res.download(file);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
