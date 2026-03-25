const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let visitors = 0;
const startTime = new Date();

app.get('/api/count', (req, res) => {
  visitors++;
  res.json({ 
    count: visitors,
    message: 'Backend running in container!',
    timestamp: new Date(),
    uptime: Math.floor((new Date() - startTime) / 1000) + ' seconds',
    container: require('os').hostname()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    service: 'backend'
  });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
