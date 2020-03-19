module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  app.get("/hours", function(req, res) {
    res.render("hours");
  });

  app.get("/haircuts", function(req, res) {
    res.render("haircuts");
  });

  app.get("/form", function(req, res) {
    res.render("form");
  });
};
