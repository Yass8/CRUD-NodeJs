
---

# Projet CRUD de Produits en Node.js

Ce projet est une application CRUD (Create, Read, Update, Delete) simple pour gérer des produits, implémentée en utilisant Node.js avec Express et stockant les données dans un fichier JSON à l'aide du module `fs`.

## Structure du Projet

Le projet est divisé en deux principaux répertoires :

- **Backend** : Contient la logique serveur avec Node.js et Express pour gérer les données des produits.
- **Frontend** : Contient l'interface utilisateur avec Bootstrap, jQuery et Ajax pour interagir avec le backend.

## Prérequis

Avant de démarrer, assurez-vous d'avoir les éléments suivants installés :

- Node.js et npm (Node Package Manager)
- Visual Studio Code ou tout autre éditeur de code de votre choix
- Téléchargez les dépendances nécessaires en exécutant `npm install` dans le répertoire Backend.

## Installation et Utilisation

1. **Cloner le Repository** :

   ```bash
   git clone https://github.com/Yass8/CRUD_NodeJs.git
   cd CRUD_NodeJs
   ```

2. **Installation des Dépendances** :

   Dans le répertoire Backend, installez les dépendances nécessaires :

   ```bash
   cd Backend
   npm install
   ```

3. **Lancer le Serveur** :

   Pour démarrer le serveur Express, utilisez la commande suivante dans le répertoire Backend :

   ```bash
   npm start
   ```

   Le serveur sera accessible à l'adresse `http://localhost:3000`.

4. **Tester les Requêtes CRUD** :

   Utilisez le fichier `test.http` avec Visual Studio Code pour tester les requêtes CRUD directement depuis l'éditeur en utilisant l'extension `REST Client`.

## Technologies Utilisées

- **Backend** :
  - Node.js
  - Express.js
  - Module `fs` pour la manipulation des fichiers
  - Middleware `cors` pour gérer les requêtes CORS
  - Middleware `body-parser` pour parser les corps des requêtes HTTP

- **Frontend** :
  - Bootstrap pour le style et la mise en page
  - jQuery pour les interactions avec le DOM
  - Ajax pour les requêtes asynchrones vers le backend

## Structure des Fichiers

```
├── Backend/
│   ├── data.json               # Fichier JSON pour stocker les produits
│   ├── server.js               # Point d'entrée du serveur Express
│   ├── package.json            # Liste des dépendances et scripts npm
│   └── ...
│
├── Frontend/
│   ├── index.html              # Interface utilisateur principale
│   ├── ajax.js                 # Scripts Javascript pour les codes ajax du projet
│   ├── index.js                # Scripts JavaScript pour les interactions frontend
│   └── ...
│
├── test.http                   # Fichier pour tester les requêtes CRUD
├── README.md                   # Ce fichier README
└── .gitignore                  # Fichier d'ignorance pour le repository git
```

---
