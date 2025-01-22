const express = require('express');
const app = express();
const port = 3000;

// Middleware 
app.use((req, res, next) => {
  const requestTime = new Date().toISOString(); // Get current time in ISO format
  console.log(`[${requestTime}] Request received: ${req.method} ${req.url}`);
  
  // Track when the response will be sent
  const originalSend = res.send; // Save the original send method

  res.send = function (body) {
    const responseTime = new Date().toISOString(); // Get current time in ISO format
    console.log(`[${responseTime}] Response sent: ${req.method} ${req.url}`);
    return originalSend.call(this, body); // Call the original send method to send the response
  };

  next(); 
});

// Route with customizable delay time in seconds
app.get('/delayed-response', (req, res) => {
  const delayInSeconds = parseInt(req.query.delay, 10); // Get the delay time from query params

  if (isNaN(delayInSeconds) || delayInSeconds < 0) {
    return res.status(400).json({ message: "Invalid delay value. Please provide a positive number in seconds." });
  }

  const delayInMilliseconds = delayInSeconds * 1000; // Convert seconds to milliseconds

  console.log(`Request received, waiting for ${delayInSeconds} seconds...`);

  // Delay the response by the specified time
  setTimeout(() => {
    res.json({ message: `Response after ${delayInSeconds} seconds` });
  }, delayInMilliseconds);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
