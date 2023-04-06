const express = require('express');

const generarURL = require("../funtions/generarURL");

const bulkUrl = async(req, res) => {
    
    const archivo = req.file;
    if (!archivo) {
        res.status(400).send('No se ha subido ningún archivo');
        return;
    }
    // Obtener el contenido del archivo en memoria
    const buffer = archivo.buffer;
    const URLs = buffer.toString('utf-8').split('\n'); //array
    
    var URLsShort = [];

    for (const iterator of URLs) {
        const isCorrect = await generarURL(iterator);
        console.log(isCorrect);
        URLsShort.push(isCorrect);

        //agragar los url valido a la db
    }

    
    
    res.json({input: URLs, output: URLsShort});
    
}



module.exports = {
    bulkUrl
}
