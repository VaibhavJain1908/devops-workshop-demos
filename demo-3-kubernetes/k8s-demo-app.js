const express = require('express');
const os = require('os');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Kubernetes!',
    hostname: os.hostname(),
    version: 'v1',
    platform: process.platform,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    checks: {
      memory: process.memoryUsage(),
      uptime: process.uptime()
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log('Pod:', os.hostname());
});
