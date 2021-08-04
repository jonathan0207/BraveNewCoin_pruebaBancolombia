# BraveNewCoin

## Contenido
1. [Presentación](#Presentación)
2. [Requisitos](#Requisitos)
3. [Pasos para su ejecución](#Pasos-para-su-ejecución)
4. [Probar el API](#Probar-el-API)

## Presentación
Esta aplicación esta construida con la intención de exponer y poder crear un listado de criptomonedas preferidas
para un usuario
  
## Requisitos

Para ejecutar la aplicación localmente se requieren las siguientes instalaciones en su
sistema:

- [NodeJS](https://nodejs.org/es/)

## Pasos para su ejecución

1. Abrir una terminal de 
   comandos en el directorio principal del proyecto y ejecutar el siguiente comando
   para instalar las dependencias del proyecto:
   ```
   npm install
   ```
   
3. Al terminar las instalaciones, puede crear un archivo de configuración local llamado
`.env` en el directorio principal en el que deberá incluir la siguiente información 
   acorde a los datos de su entorno de ejecución:
   ```
   PORT=300
   database=bPNsb88hVw
   dbusername=bPNsb88hVw
   password=27017
   host=remotemysql.com
   dialect=mysql
   CRYPTOCOIN_URL=https://api.coingecko.com/api/v3
   ```
   
4. Ahora puede poner en marcha la aplicación mediante el comando:
    ```
    npm start
    ```
   Si en el archivo `.env` usa los mismos valores que en el ejemplo anterior la 
aplicación deberá estar ejecutandose en la url `http://localhost:3000`.
   
## Probar el API

Para probar el api puede usar la aplicación [Postman](https://www.postman.com/) 
e importar el archivo `coins.postman_collection.json` que contiene la colección
de peticiones a cada uno de los endpoints expuestos por la aplicación.
