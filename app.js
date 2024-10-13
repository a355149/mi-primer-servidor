import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
    try {
        const fileContent = await fs.readFile('archivo.txt', 'utf-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(fileContent);
    } catch (err) {
        res.statusCode = 500;
        res.end("Error al cargar el archivo.");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/`);
});