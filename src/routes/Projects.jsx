

import { useEffect } from 'react';
import Header from '../header/header';
import  { useState } from 'react';
import './Projects.css'; 

function Projects() {
    const [project, getallProjects] = useState();
    const getProjects = async () => {
        console.log('Affichage des projets');
        const response = await fetch('http://localhost:3000/api/projects' );

        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
            getallProjects(data);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    




    return (
        <>
              
         <div className='project-presentation'>
              <Header />

              <h1>Bienvenue sur notre site!</h1>
              <button onClick={() => window.location.href = '/newproject'}>Créer un projet</button>
              <p>Ceci est un bouton permettant de créer un projet</p>

              
              <div className="container">
              {project && project.map((proj) => (
                    
                    <div className="div-with-shadow" key={proj.id} onClick={() => window.location.href = `/projects/${proj._id}`} >
                        
                              <h3>nom {proj.titre}</h3>
                              {/* Add other project details here */}
                         </div>
                    
              ))}
              </div>
         </div>
              </>    
    );


            
        
}

export default Projects;