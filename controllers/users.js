const fs = require('fs')

const signup = (req, res) => {

    try {
        const filename = 'db/db.temp.json'
        fs.readFile(filename, (err, data) => {
            if (err) {
                return console.error(err);
            };
            const users = JSON.parse(data);
            users.splice(1, 2)
            users.push(req.body)
            fs.writeFile(filename, JSON.stringify(users, null, 4), (err) => {
                if (err) {
                    throw err;
                } else {
                    res.json({ message: "Successful", status: res.statusCode })
                }

            });
        });
    } catch (error) {
        res.json({ error: error.message })
    }

}

module.exports = { signup }