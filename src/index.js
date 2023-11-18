// Install the EJS package if you haven't already: npm install ejs

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static(__dirname + "/index.html"));

// Render the index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/submit', upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]), function (req, res) {
  // Placeholder code for handling form submissions
  const { firstName, lastName, email } = req.body;
  const image1 = req.files['image1'][0].filename;
  const image2 = req.files['image2'][0].filename;
  const image3 = req.files['image3'][0].filename;

  // Process the data (store in a database, calculate scores, etc.)
  // This is a placeholder; actual logic should be implemented here

  res.send('Submission received!'); // Placeholder response
});

// Start the server
const port = 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
