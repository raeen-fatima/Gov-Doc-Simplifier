const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { simplifyDocument } = require('../controllers/docController');

router.post('/upload', upload.single('file'), simplifyDocument);



module.exports = router;
