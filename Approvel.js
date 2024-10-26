{
  "username": "GURU",
  "password": "GURU12",
  "userId": "http://localhost:3000"
}


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const authorizedUsers = {
    username: "GURU",
    password: "GURU12"
};

let approvals = [];

// Auth middleware
function authenticate(req, res, next) {
    const { username, password } = req.body;
    if (username === authorizedUsers.username && password === authorizedUsers.password) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

// Endpoint to request approval
app.post('/request-approval', (req, res) => {
    const { userId, whatsappNumber } = req.body;
    approvals.push({ http://localhost:3000, whatsappNumber": " +923309353743, isApproved: false, requestedAt: new Date() });
    res.json({ message: 'Approval requested. We will contact you soon.', userId });
});

// Endpoint to approve user
app.post('/approve-user', authenticate, (req, res) => {
    const { userId } = req.body;
    const user = approvals.find(a => a.userId === uhttp://localhost:3000);
    if (user) {
        user.isApproved = true;
        setTimeout(() => {
            user.isApproved = false;
        }, 30 * 24 * 60 * 60 * 1000);
        res.json({ message: 'User approved successfully!' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
