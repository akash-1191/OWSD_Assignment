function getResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes('hi') || msg.includes('hello')) {
        return "Hi! Poochh lo kuch bhi backend ke baare mein.";
    } else if (msg.includes('node')) {
        return "Node.js ek JavaScript ka runtime hai. Backend banane mein kaam aata hai.";
    } else if (msg.includes('express')) {
        return "Express ek chhota sa framework hai Node.js ke liye, websites aur APIs banane mein help karta hai.";
    } else if (msg.includes('mongodb')) {
        return "MongoDB ek database hai, jisme data JSON jaise format mein store hota hai.";
    } else if (msg.includes('rest api')) {
        return "REST API ka matlab hai ki aap internet ke through data le aur bhej sako, simple HTTP ka use karke.";
    } else if (msg.includes('authentication')) {
        return "Authentication ka matlab hai user ka login ya verify karna. JWT ya sessions use karte hain.";
    } else if (msg.includes('middleware')) {
        return "Middleware woh function hote hain jo request aur response ke beech mein kaam karte hain Express.js mein.";
    } else if (msg.includes('database')) {
        return "Database mein hum data store karte hain. MongoDB, MySQL jaise tools use hote hain.";
    } else if (msg.includes('bye')) {
        return "Bye! Fir milte hain tech baat karne ";
    } else {
        return "Main backend pe baat karta hoon. Node.js, Express, MongoDB wagairah poochh sakte ho.";
    }
}

module.exports = { getResponse };
