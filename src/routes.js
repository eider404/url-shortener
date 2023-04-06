const {Router} = require("express");
const routes = Router();
const multer = require('multer');
const upload = multer();

const urlController = require("./controller/urlController");
const bulkUrlController = require("./controller/bulkUrlController");



routes.route('/set-url')
    .post(urlController.setUrl);

routes.route('/:urlshort')
    .get(urlController.redireccionar);

routes.route('/bulk-url')
    .post(upload.single('archivo'), bulkUrlController.bulkUrl);


module.exports = routes;