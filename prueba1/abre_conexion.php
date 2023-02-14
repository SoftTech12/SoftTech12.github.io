<?php

// Parametros a configurar para la conexion de la base de datos

$hostdb = "localhost";    // sera el valor de nuestro HOST
$basededatos = "soft tech";    // sera el valor de nuestra BD

$usuariodb = "root";    // sera el valor de nuestra BD
$clavedb = "";    // sera el valor de nuestra BD

$tabla_db1 = "registro";    // sera el valor de una tabla
$tabla_db2 = "otratabla";    // sera el valor de otra tabla

// Fin de los parametros a configurar para la conexion de la base de datos

$conexion_db = mysqli_connect($hostdb,$usuariodb,$clavedb,$basededatos)
    or die ("Conexión denegada, el Servidor de Base de datos que solicitas NO EXISTE");
    //$db = mysqli_select_db("$basededatos", $conexion_db)
    //or die ("La Base de Datos <b></b> NO EXISTE");
?>