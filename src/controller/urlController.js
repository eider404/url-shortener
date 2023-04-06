const generarURL = require("../funtions/generarURL");
const connection = require("../connectDB");



const setUrl = async(req, res) => {
    const url = req.body

    if(!url.urlReal){
        return res.status(401).json({status: 401, mensaje: "Url no ingresado"})
    }
    

    //console.log(generarURL(url.urlReal));
    const isCorrect = await generarURL(url.urlReal)
    if(! isCorrect){
        return res.status(401).json({status: 401, mensaje: "Url invalido"})
    }else{
        url.urlShort = isCorrect;
        
    }

    
    connection.query("SELECT * FROM url WHERE urlReal = ?", [url.urlReal], (err, result, fields)=>{
        if (err) throw err;
        
        if(result[0]){
            return res.status(200).json({status: 200,input: url.urlReal ,urlShort: url.urlShort})
        }  

        connection.query("INSERT INTO url set ?", [url], (err, rows)=>{
            if(err){
                return res.status(401).json({status: 401,mensaje: "Algo salio mal"})
            }else{
                return res.status(200).json({status: 200,input: url.urlReal ,urlShort: url.urlShort})
            }
        })
    });
}



const redireccionar = async(req, res) => {
    const {urlshort} = req.params;
    connection.query("SELECT * FROM url WHERE urlShort = ?", [`http://localhost:3000/${urlshort}`], (err, result, fields)=>{
        if (err) throw err;
        
        if(result[0]){
            //return res.send(result[0].urlReal)
            res.redirect(result[0].urlReal);
        }else{
            pathRoot = __dirname.replace('src/controller','')
            res.sendFile(pathRoot+'/public/404.html');
        }
    });
}


module.exports = {
    setUrl,
    redireccionar

}