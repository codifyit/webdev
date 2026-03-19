

-- DDL (Data Definition Language)
-- Instrucción SQL para crear la tabla `usuarios`
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL, --campo identificador del usuario, número entero
  `nombre` varchar(100) NOT NULL, --campo para el nombre de usuario, cadena de 100 caracteres
  `email` varchar(100) NOT NULL, --campo para el correo de usuario, cadena de 100 caracteres
  `telefono` varchar(15) NOT NULL --campo para el teléfono de usuario, cadena de 15 caracteres
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear los índices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

-- Modificar un campo de la tabla `usuarios`
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--DML (Data Management Language)
-- Insertar un registro en la tabla `usuarios`
INSERT INTO `usuarios` (`id`, `nombre`, `email`, `telefono`) VALUES
(5, 'usuario1', 'usuario1@gmail.com', '5555555555'),
(7, 'usuario1', 'usuario2@gmail.com', '5555555555');

-- Actualizar un registro de la tabla `usuarios`
UPDATE `usuarios` SET nombre='tunombre' WHERE id=1;

-- Eliminar un registro de la tabla `usuarios`
DELETE FROM `usuarios` WHERE id=2;

