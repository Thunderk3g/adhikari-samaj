// controllers/imageController.js
const { GridFSBucket, ObjectID } = require('mongodb');
const { Readable } = require('stream');
const Image = require('../models/photo.model');

const uploadImage = async (req, res) => {
    const { buffer, originalname } = req.file;

    try {
        const readableStream = new Readable();
        readableStream.push(buffer);
        readableStream.push(null);

        const filename = originalname;

        const writeStream = req.app.locals.gridFsBucket.openUploadStream(filename);
        readableStream.pipe(writeStream);

        writeStream.on('error', () => {
            res.sendStatus(500);
        });

        writeStream.on('finish', async () => {
            const newImage = new Image({ filename });
            await newImage.save();

            res.status(200).json({ message: 'Image uploaded successfully!' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
const getImage = (req, res) => {
    try {
        const fileNames = [];
        const readStream = req.app.locals.gridFsBucket.find().stream(); // Find all files in the bucket and create a stream

        readStream.on('data', (file) => {
            fileNames.push(file.filename);
        });

        readStream.on('error', () => {
            res.sendStatus(404);
        });

        readStream.on('end', async () => {
            const images = [];

            for (const filename of fileNames) {
                const imageStream = req.app.locals.gridFsBucket.openDownloadStreamByName(filename);
                const chunks = [];

                imageStream.on('data', (chunk) => {
                    chunks.push(chunk);
                });

                imageStream.on('error', () => {
                    res.sendStatus(404);
                });

                imageStream.on('end', () => {
                    const imageBuffer = Buffer.concat(chunks);
                    const base64Image = imageBuffer.toString('base64');
                    const imageData = `data:image/jpeg;base64,${base64Image}`;
                    images.push(imageData);

                    if (images.length === fileNames.length) {
                        res.status(200).json({ images });
                    }
                });
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {
    uploadImage,
    getImage,
};
