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



module.exports = {
    setUrl,

}