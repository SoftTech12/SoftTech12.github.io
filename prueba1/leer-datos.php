<html> 
<head> 
<title>Muestra los resultados de una consulta MySQL.</title> 
</head> 

<body> 
<div align='center'> 
  <table border='1' cellpadding='0' cellspacing='0' width='600' bgcolor='#F6F6F6' bordercolor='#FFFFFF'> 
    <tr> 
      <td width='150' style='font-weight: bold'>ID</td> 
      <td width='150' style='font-weight: bold'>NOMBRE</td> 
      <td width='150' style='font-weight: bold'>E-MAIL.</td> 
      <td width='150' style='font-weight: bold'></td> 
    </tr> 
<?php 
include('abre_conexion.php'); 

    $query = "select * from $tabla_db1";     // Esta linea hace la consulta
    $result = mysqli_query($conexion_db,$query); 

    while ($registro = mysqli_fetch_array($result)){ 
      echo "<tr><td width='150'>".$registro['id']."</td> <td width='150'>".$registro['nombre']."</td> <td width='150'>".$registro['email']."</td> <td width='150'></td> </tr>"; 
    } 
include('cierra_conexion.php'); 
?> 
   </table> 
</div> 
</body> 

</html> 