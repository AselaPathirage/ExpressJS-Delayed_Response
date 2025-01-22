# Express Delayed Response API

A simple Express.js server that provides an endpoint to return responses after a customizable delay, specified in seconds.

## Features

- Middleware to log request and response timestamps.
- Endpoint to delay responses dynamically based on user input.
- Input validation for delay values.

## Prerequisites

- [Node.js](https://nodejs.org) (v14 or later)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AselaPathirage/ExpressJS-Delayed_Response.git
   cd express-delayed-response

## Test

Run the server
```bash
  node server.js
```
Sample Curl
```bash
  curl "http://localhost:3000/delayed-response?delay=10"
```

