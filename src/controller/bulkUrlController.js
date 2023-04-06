const express = require('express');

const bulkUrl = (req, res) => {
    
    const archivo = req.file;
    if (!archivo) {
        res.status(400).send('No se ha subido ningún archivo');
        return;
    }
    // Obtener el contenido del archivo en memoria
    const buffer = archivo.buffer;
    const URLS = buffer.toString('utf-8').split('\n'); //array
    res.json({res: URLS});
    
}



module.exports = {
    bulkUrl
}
