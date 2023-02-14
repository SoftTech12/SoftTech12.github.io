-- Cambia "mi_tabla" por el nombre que quieras que tenga la tabla
-- 
-- Estructura de tabla para la tabla `mi_tabla`
-- 

CREATE TABLE `alumnos` (
  `id` int(6) NOT NULL auto_increment,
  `nombre` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;