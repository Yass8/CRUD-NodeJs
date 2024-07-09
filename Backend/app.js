const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyparser = require('body-parser')


const app = express();
app.use(cors());
app.use(bodyparser.json());

const filePath = './data.json';

function readProducts() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function writeProducts(datas) {
    // Convert JavaScript object to formatted JSON string and write to file
    fs.writeFileSync(filePath, JSON.stringify(datas, null, 2));
}


// CRUD ROUTES
app.get('/products/',(req, res) => {
    res.send(readProducts())
});

app.get('/products/:id',(req, res) => {
    
    let products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Produit non trouvé');
    }
    res.json({status: 200, product: product});

});

app.post('/products', (req, res) => {
    const products = readProducts();
    const data = { id: Date.now(), ...req.body }
    products.push(data);
    writeProducts(products);
    res.json({ status: 200, message: 'Produit ajouté avec succès' });

});

app.put('/products/:id', (req, res) => {

    let products = readProducts();
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

    if (productIndex === -1) {
        return res.json({ status: 404, message: 'Produit non trouvé' });
    }

    // Mettre à jour les détails du produit
    // Créer une copie du produit existant et mettre à jour avec les nouvelles données
    products[productIndex] = { ...products[productIndex], ...req.body };

    // Enregistrer les modifications
    writeProducts(products);

    res.json({ status: 200, message: 'Produit mis à jour avec succès' });

});

app.delete('/products/:id', (req, res) => {
    const products = readProducts();
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.json({ status: 404, message: 'Produit non trouvé' });
    }

    const filteredProducts = products.filter(p => p.id !== id);
    writeProducts(filteredProducts);

    res.json({ status: 200, message: 'Produit supprimé avec succès' });
});

module.exports = app;