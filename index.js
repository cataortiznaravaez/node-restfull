const express = require("express");
const server = express();

const empleado = {
    "NombreEmpleado": "Juan",
	"ApellidoEmpleado":"Perez",
	"numeroDocumento" : "987"
};

server.get("/",function(request, response){

    response.send("Servicio get raiz");
});

server.get("/empleado",function(request, response){

    response.send(empleado);
});

server.listen(4000,()=>{
     console.log("Hola mundo ->"+4000);
});