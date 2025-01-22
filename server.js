const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // فایل db.json شما
const middlewares = jsonServer.defaults();

const API_KEY = '4NH9cchNO9mdtB93TSwmhR8oWdxxvEzODGI9jalqBMy4Zpv1KztyQRvayNysGhcK'; 

server.use(middlewares);

server.use((req, res, next) => {
    const apiKey = req.headers['authorization'];
    if (apiKey && apiKey === `Bearer ${API_KEY}`) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
    }
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running on port 3000');
});
