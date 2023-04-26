module.exports = function(app) {
    app.get('/api/test', (req, res) => {
        return res.status(200).send("TEST :)");
    });
};
