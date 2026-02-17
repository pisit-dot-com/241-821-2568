const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const port = 8000;

app.use(bodyParser.json());
let users = [];
let counter = 1;

// path = Get /test
app.get(`/users`, (req, res) => {
    res.json(users);
});

// path = Post /user
app.post(`/user`, (req, res) => {
    let user = req.body;
    users.push(user);
    user.id = counter;
    counter += 1;
    res.json({
        message: `User added successfully!`,
        user: user
    }); 
});

// path = Put / users/:id
app.put(`/users/:id`, (req, res) => {
    let id = req.params.id;
    let selectedIndex = users.findIndex(user => user.id == id);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});