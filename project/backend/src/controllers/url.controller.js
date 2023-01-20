const Url = require('../models/urls');
const hash = require('../utils/hash');

exports.createShortUrl = async (req, res) => {
    // Validate the original URL
    if (!req.body.originalUrl) {
        return res.status(400).json({ error: 'originalUrl is required' });
    }
    if (!/^(http|https):\/\/[^ "]+$/.test(req.body.originalUrl)) {
        return res.status(400).json({ error: 'originalUrl is not a valid URL' });
    }

    try {
        // Check if the original URL already has a shortened URL
        let existingUrl = await Url.findOne({ originalUrl: req.body.originalUrl });
        if (existingUrl) {
            return res.json({
                originalUrl: existingUrl.originalUrl,
                shortenedUrl: `http://${req.get('host')}/${existingUrl.shortId}`
            });
        }

        // Generate a unique short id
        let shortId;
        do {
            shortId = hash.encode(Date.now().toString());
            existingUrl = await Url.findOne({ shortId });
        } while (existingUrl);

        // Create a new document in the database
        const newUrl = new Url({
            originalUrl: req.body.originalUrl,
            shortId: shortId,
            accessCount: 0
        });
        await newUrl.save();

        // Return the original and shortened URLs
        return res.json({
            originalUrl: newUrl.originalUrl,
            shortenedUrl: `${req.protocol}://${req.get('host')}/${shortId}`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error while shortening the URL' });
    }
};

exports.getOriginalUrl = async (req, res) => {
    try {
        // Find the URL with the given short id
        const url = await Url.findOne({ shortId: req.params.id });
        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }

        // Increment the access count
        url.accessCount++;
        await url.save();

        // Redirect the user to the original URL
        return res.redirect(url.originalUrl);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error while redirecting the URL' });
    }
};