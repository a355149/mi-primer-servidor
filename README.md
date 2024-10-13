# Práctica - Mi primer servidor

Este proyecto demuestra la creación de un servidor básico en Node.js que lee y envía el contenido de un archivo de manera asíncrona, utilizando las funciones asíncronas del módulo `fs` y las palabras clave `async` y `await`.

- Sergio Cázares
- UACH - Ingeniería de Software Virtual
- Programación para plataformas emergentes

## Descripción

En este proyecto, partimos de un servidor síncrono que lee un archivo utilizando el método `readFileSync`, el cual bloquea la ejecución del código hasta que la lectura del archivo se completa. Luego, modificamos este código para utilizar la versión asíncrona del paquete `fs` (`fs/promises`), lo que nos permite leer el mismo archivo, pero sin bloquear la ejecución del programa. 

Esto significa que, mientras se realiza la operación de lectura, el servidor puede continuar procesando otras tareas o solicitudes, mejorando la eficiencia del servidor.

### Diferencia entre Síncrono y Asíncrono

- **Lectura Síncrona**: La ejecución del código se detiene hasta que se completa la operación de lectura.
- **Lectura Asíncrona**: La operación de lectura no bloquea el flujo del programa. El código sigue ejecutándose mientras la operación de lectura ocurre en segundo plano.

Para manejar esta lectura asíncrona, es importante utilizar las palabras reservadas `async` y `await`, las cuales permiten que el código espere la finalización de la operación de manera no bloqueante.

## Requisitos

- [Node.js](https://nodejs.org/) >= 20.
- Archivo `archivo.txt` con contenido para leer en la misma carpeta que el programa.

## Ejecución del Proyecto

### Ejecutar con Node.js

1. Clona este repositorio.
2. Abre una terminal (cmd) en la carpeta del proyecto.
3. Ejecuta el siguiente comando para iniciar el servidor:

   ```bash
   node app.js

### Ejecutar con Docker

1. Clona este repositorio.
2. Abre una terminal (cmd) en la carpeta del proyecto.
3. Ejecuta el siguiente comando para crear la imagen de Docker:

   ```bash
   docker build -t servidor-nodejs-asincrono .

4. Ejecuta el siguiente comando para correr un nuevo contenedor de Docker:

   ```bash
   docker run -p 3000:3000 servidor-nodejs-asincrono
