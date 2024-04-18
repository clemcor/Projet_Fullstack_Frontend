import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function OneProject() {
  const { id } = useParams();
  const [project, setProject] = useState();

  const getProject = async () => {
    console.log('Affichage des projets');
    const response = await fetch(`http://localhost:3000/api/projects/${id}` );
    //connaitre le type de ID
    console.log('type de id:', typeof id);
    if (!response.ok) {
        // Gérer l'erreur
        console.error('Une erreur s\'est produite:', response.statusText);
    } else {
        const data = await response.json();
        console.log('Réponse du serveur:', data);
        setProject(data);
    }
};
    useEffect(() => {
        getProject();
    }, []);
    
    const deleteProject = async () => {
        console.log('Suppression d\'un projet');
        const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
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

 

    
    return (
        <div>
           
        <h1>titre: {project && project.titre}</h1>
        <p>descriptionIntro: {project && project.descriptionIntro}</p>
        <p>description: {project && project.description}</p>
        <p>ListeMotCle: {project && project.ListeMotCle}</p>
        <p>lienImage: {project && project.lienImage}</p>
        <p>lienGitHub: {project && project.lienGitHub}</p>
        <p>listeImmages: {project && project.listeImmages}</p>
        <p>nbVue: {project && project.nbVue}</p>

        <button onClick={deleteProject}>Supprimer le projet</button>



        
    </div>
  );
}

export default OneProject;
