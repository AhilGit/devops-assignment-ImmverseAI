const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>DevOps CI/CD Assignment</h1>
        <h2>Application Deployed Successfully 🚀</h2>
        <p>Server is running on Node.js + Docker + Jenkins</p>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
