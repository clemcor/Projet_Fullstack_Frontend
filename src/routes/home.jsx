

import Header from '../header/header';
import  { useState } from 'react';

function Home() {

    const [project, setProject] = useState();
    const createProject = async () => {
        console.log('Création d\'un projet');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "titre":"Projet Fullstack",
                "descriptionIntro":"Projet Fullstack",
                "description":"Projet Fullstack",
                "ListeMotCle":["Projet Fullstack"],
                "lienImage":"https://www.google.com",
                "lienGitHub":"https://www.google.com",
                "listeImmages":["https://www.google.com"],
                "nbVue":0
            })
        
        });
        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
            setProject(data);



        }
    };

    const getProjects = async () => {
        console.log('Affichage des projets');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects' );

        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
        }
    }

    const getProject = async () => {
        console.log('Affichage des projets');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects/661e92bf31e4b6c2c1e32788' );

        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
        }
    };

    const deleteProject = async () => {
        console.log('Suppression d\'un projet');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects/661e92bf31e4b6c2c1e32788', {
            method: 'DELETE'
        });
        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.text();
            console.log('Réponse du serveur:', data);
        }
    }

    const updateProject = async () => {
        console.log('Modification d\'un projet');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects/661e92bf31e4b6c2c1e32788', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "titre":"Projet Fullstack",
                "descriptionIntro":"Projet Fullstack",
                "description":"Projet Fullstack",
                "ListeMotCle":["Projet Fullstack"],
                "lienImage":"https://www.google.com",
                "lienGitHub":"https://www.google.com",
                "listeImmages":["https://www.google.com"],
                "nbVue":0
            })
        });
        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
        }
    }



    return (
       
        <div>
             <Header />
            <h1>Bienvenue sur notre site!</h1>
            <p>Ceci est un bouton permettant de créer un projet</p>
            <button onClick={createProject}>Créer un projet</button>
            <button onClick={getProjects}>Afficher les projets</button>
            <button onClick={deleteProject}>Supprimer un projet</button>
            <button onClick={getProject}>recuperer un projet</button>

            {project ? <a> titre du project est {project.titre}  zef</a> : <div> Pas de projet </div>}
           
        </div>
    );


            
        
}

export default Home;