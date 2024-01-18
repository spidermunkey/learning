module.exports.homeRoutes = (req,res) => {
    res.render('index');
}

module.exports.add_user = (req,res) => {
    res.render('add_user');
}

module.exports.update_user = (req,res) => {
    res.render('update_user');
}