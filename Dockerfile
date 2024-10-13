# Usar la imagen base oficial de Node.js
FROM node:20

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Exponer el puerto que utilizará el servidor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]