const express = require('express');

const generarURL = require("../funtions/generarURL");
const connection = require("../connectDB");



const bulkUrl = async(req, res) => {
    
    const archivo = req.file;
    var URLs = [];
    var URLsShort = [];

    if (!archivo) {
        res.status(400).send('No se ha subido ningún archivo');
        return;
    }

    const buffer = archivo.buffer;
    URLs = buffer.toString('utf-8').split('\n'); //array
    

    for (const url of URLs) {
        const urlShort = await generarURL(url);
        let urlForSave = {};
        
        if(urlShort == false){
            URLsShort.push("URL invalida");
        }else{

            await new Promise((resolve, reject) => {
                connection.query("SELECT * FROM url WHERE urlReal = ?", [url], (err, result, fields) => {
                    if (err) {
                        reject(err);
                    }

                    if (result.length > 0) {
                        URLsShort.push(result[0].urlShort);
                    }else{
                        urlForSave.urlReal = url;
                        urlForSave.urlShort = urlShort;
                        URLsShort.push(urlShort);
                        
                        connection.query("INSERT INTO url set ?", [urlForSave], (err, rows)=>{
                            if(err){}
                            console.log("url insertado");
                        })
                    };
                    resolve();    

                });
            });
        } 
    }

    
    return res.status(200).json({status: 200,inputs: URLs ,urlsShort: URLsShort})
    
}



module.exports = {
    bulkUrl
}
