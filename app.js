const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
app.set('layout', 'layouts/boilerplate');

// 🔽 This is required to parse form submissions
app.use(express.urlencoded({ extended: true }));

const pagesRouter = require('./routes/pages');
app.use('/', pagesRouter);

app.get('/', (req, res) => {
  res.render('index', { title: "Dr. Serena Blake’s Practice" });
});

app.post('/contact', (req, res) => {
  try {
    const { 'Full-name': name, email, message, 'preferred-time': time } = req.body;
    console.log({ name, email, message, time });
    res.send("Form submitted successfully!");
  } catch (error) {
    console.error("Error parsing form data:", error);
    res.status(400).send("Invalid form data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});