const express = require('express');
//const http = require('http');
//const fs = require('fs');

const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Biometric API is running 🚀');
});

app.post('/getAadhaarData', (req, res) => {
    console.log('📥 Aadhaar Callback received:');
    console.log(JSON.stringify(req.body, null, 2));

    res.json({
        status: "SUCCESS",
        message: "Aadhaar data received",
        timestamp: new Date()
    });
});

app.get('/getAadhaarData', (req, res) => {
    res.send("Use POST for callback");
});

// SSL config
//const options = {
//    key: fs.readFileSync('/home/bel/nginx_certs/private.key'),
//    cert: fs.readFileSync('/home/bel/nginx_certs/biometric.crt')
//};

// Start HTTPS server

//http.createServer(app).listen(12004, '0.0.0.0', () => {
//    console.log(`🚀 HTTP Server running on https://0.0.0.0:12004`);
//});

const PORT = process.env.PORT || 12004;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
