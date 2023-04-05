const {Router} = require("express");
const routes = Router();



routes.post('/set-url',(req, res)=>{
    const url = req.body;
    res.json({res: url.url});
})



module.exports = routes;