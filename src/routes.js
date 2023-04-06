const {Router} = require("express");
const routes = Router();

const urlController = require("./controller/urlController")



routers.route('/set-url')
    .post(urlController.setUrl);


module.exports = routes;