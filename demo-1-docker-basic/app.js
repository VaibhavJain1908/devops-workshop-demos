const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const hostname = require('os').hostname();
  const html = `
    <html>
      <head>
        <title>Docker Demo</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 100px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 50px;
            border-radius: 20px;
            max-width: 600px;
            margin: 0 auto;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🐳 Hello from Docker!</h1>
          <p>This app is running inside a container</p>
          <p><strong>Container ID:</strong> ${hostname}</p>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});