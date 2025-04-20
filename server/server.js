const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const docRoutes = require('./routes/docRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration for Frontend
const corsOptions = {
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/docs', docRoutes);

// File upload setup (optional)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
app.post('/api/docs/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.status(200).send('File uploaded successfully');
});

// Test Route
app.get('/', (req, res) => {
  res.send('GovDocs Simplifier backend is running...');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});