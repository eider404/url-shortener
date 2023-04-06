const {Router} = require("express");
const routes = Router();

const urlController = require("./controller/urlController")



routes.route('/set-url')
    .post(urlController.setUrl);


module.exports = routes;