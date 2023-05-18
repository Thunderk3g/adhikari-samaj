const Image = require('../models/photo.model');

exports.uploadImage = async (req, res) => {
    try {
        const { filename } = req.file;
        const { caption } = req.body;

        const image = new Image({
            filename,
            caption
        });

        await image.save();

        res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload image' });
    }
};
