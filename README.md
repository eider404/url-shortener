# Acortador de URLs

Este es un programa de Node.js que permite acortar URLs largas y obtener una URL corta que redirige al destino original.

## Funcionamiento:
![Drawing a Starfish](https://s2.gifyu.com/images/url-shortener.gif)


## Instalación

#### Requisitos:
1. Node.js (Version 18)
2. Servidor MySQL

#### Procedimiento:
1. Crear la base de datos y la tabla 'url' en su servidor MySQL, puedes copiar el codigo SQL del archivo [url.sql](https://github.com/eider404/url-shortener/blob/main/url.sql "url.sql") y pegalo en tu servidor MySQL.
2. Configura el archivo [connectDB.js](https://github.com/eider404/url-shortener/blob/main/src/connectDB.js "connectDB.js") segun la configuracion de su servidor MySQL.
```javascript
var connection = mysql.createConnection({
	  host     : 'localhost',				//modificar
	  user     : 'root',						//modificar
	  password : '',						//modificar
	  database : 'urlshortener'
});
```

3.  Instala las dependencias desde la raiz del proyecto y ejecute el siguiente comando en la terminal:
```bash
npm install
```

4. Ejecute el programa con el siguiente comando en la terminal. (asegurece que el puerto 3000 de su equipo no este en uso)
```bash
node app.js
```
output:
```bash
SERVER RUNING ON PORT 3000...
DB conectada !
```


## Probar el proyecto
El proyecto puede funcionar de dos formas:

1. Mediante texto, en donde solo puedes agregar una url.
	- Al ingresar un url valido, generara una tabla donde aparecera la url original y la url corta, de lo contrario aparecera un mensaje que que la url no es valida.
	
![texto](https://i.ibb.co/GJ4g5QV/Captura-desde-2023-04-07-23-44-22.png)

2. Mediante un archivo.txt donde puedes agregar cientos o miles de url
	- Al enviar el archivo, generara una tabla con todas las urls que estaban en el archivo junto con su url corta, en caso de que la url no sea valida aparecera que la url no es valida 
	- Puedes probarlo con ayuda del archivo [file.txt](https://github.com/eider404/url-shortener/blob/main/file.txt "file.txt")
	

![file](https://i.ibb.co/fxWgpN8/Captura-desde-2023-04-07-23-41-38.png)


### Verificar si las url funcionan
Cuando alguien accede a la URL corta ("http://localhost:3000/XzeMyifXlgQ"), el servidor debe redirigir a la URL real ("http://www.google.com").

![file](https://i.ibb.co/LCqhYDq/Captura-desde-2023-04-07-23-48-15.png)

------------

![file](https://i.ibb.co/cQjkmk7/Captura-desde-2023-04-07-23-48-55.png)



