exports.index = (req, res) => {
    res.render("index");
};

exports.about = (req, res) => {
    res.render("about");
}

exports.blog = (req, res) => {
    res.render("blog");
}

exports.notFound = (req, res) => {
    res.render("404");
}