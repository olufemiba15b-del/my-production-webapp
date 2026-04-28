const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send('<h1>CI/CD Working Successfully!</h1>'); 
});

app.get('/health', (req, res) => {
  res.send('Server is healthy');
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});