const fs = require('fs');
const pdfParse = require('pdf-parse');
const { ProcessTextWithOpenAI } = require('./openai');

async function ResumeUpload(req, res) {
    try {
        console.log("Endpoint hit: /resumeUpload");
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const file = req.files.file;
        if (file.mimetype !== 'application/pdf') {
            return res.status(400).json({ message: 'Only PDF files are supported.' });
        }

        pdfParse(file.data).then(async text => {
            req.body.message = text.text; // Add this line
            const processedText = await ProcessTextWithOpenAI(req, res); // Pass res as well
            res.send({ success: true, data: processedText });
        }).catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    ResumeUpload
};