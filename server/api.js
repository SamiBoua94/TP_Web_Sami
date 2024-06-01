const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Configuration de la connexion MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Oracle123*',
    database: 'tp_web'
});

// Connexion à la base de données MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route pour obtenir les produits
app.get('/products', (req, res) => {
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
