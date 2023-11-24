const getAllCategories = (req, res) => {
    return req.server.app.dummyListCategories;
}

module.exports = { getAllCategories };