const pdfParse = require('pdf-parse');
const { simplifyText } = require('../utils/simplifyText');

const simplifyDocument = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    const fileBuffer = file.buffer;
    const fileName = file.originalname;

    // ⬇️ Extract PDF Text
    const data = await pdfParse(fileBuffer);
    const extractedText = data.text;

    // ⬇️ Get target language from request body, default is English
    const language = req.body.language || 'en';

    // ⬇️ Simplify and translate text
    const simplified = await simplifyText(extractedText, language);

    // ⬇️ Return response
    res.status(200).json({
      fileName,
      simplifiedText: simplified,
    });
  } catch (error) {
    console.error('Simplify Error:', error);
    res.status(500).json({ error: 'Failed to simplify document' });
  }
};

module.exports = { simplifyDocument };
