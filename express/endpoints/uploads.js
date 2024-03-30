const fs = require('fs');
const pdfParse = require('pdf-parse');

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

        pdfParse(file.data).then(text => {
            //replace newlines with line break tags
            // text = text.text.replace(/\n/g, '<br>');
            console.log(text);
            res.send(text);
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