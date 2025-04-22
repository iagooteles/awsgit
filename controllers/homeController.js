exports.index = (req, res) => {
    res.render("index");
};

exports.about = (req, res) => {
    res.render("about");
}

exports.blog = (req, res) => {
    res.render("blog");
}

exports.contact = (req, res) => {
    res.render("contact");
}

exports.course = (req, res) => {
    res.render("course");
}

exports.feature = (req, res) => {
    res.render("feature");
}

exports.team = (req, res) => {
    res.render("team");
}

exports.testimonial = (req, res) => {
    res.render("testimonial");
}

exports.notFound = (req, res) => {
    res.render("404");
}

exports.notFound = (req, res) => {
    res.render("newRoute");
}