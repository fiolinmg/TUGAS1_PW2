const express = require('express');
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
