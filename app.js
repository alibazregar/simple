const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/page1', (req, res) => {
  res.sendFile(__dirname + '/public/page1.html');
});

app.get('/page2', (req, res) => {
  res.sendFile(__dirname + '/public/page2.html');
});

app.post('/submit1', (req, res) => {
  const { name, message } = req.body;
  console.log('Received data:', { name, message });

  if (!name) {
    return res.status(400).send('Name is required');
  }

  if (!message) {
    return res.status(400).send('Message is required');
  }

  // Perform complex logic based on the received data
  // Example: Save the data to a database

  // Simulate an asynchronous operation
  setTimeout(() => {
    const responseHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Submit 1 Response</title>
        <style>
          /* Add your custom styles here */
        </style>
      </head>
      <body>
        <h1>Submit 1 Response</h1>
        <p>Data received and processed successfully!</p>
      </body>
      </html>
    `;

    res.send(responseHTML);
  }, 2000);
});

app.post('/submit2', (req, res) => {
  const { email } = req.body;
  console.log('Received data:', { email });

  if (!email) {
    return res.status(400).send('Email is required');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Email is invalid');
  }

  // Perform complex logic based on the received data
  // Example: Send an email to the provided email address

  // Simulate an asynchronous operation
  setTimeout(() => {
    const responseHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Submit 2 Response</title>
        <style>
          /* Add your custom styles here */
        </style>
      </head>
      <body>
        <h1>Submit 2 Response</h1>
        <p>Email sent successfully!</p>
      </body>
      </html>
    `;

    res.send(responseHTML);
  }, 3000);
});

module.exports = app