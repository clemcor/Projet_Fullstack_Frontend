

import { useEffect } from 'react';
import Header from '../header/header';
import  { useState } from 'react';
import './Projects.css'; 

function Projects() {
    const [project, getallProjects] = useState();
    const getProjects = async () => {
        console.log('Affichage des projets');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects' );

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
            <br />

              <button onClick={() => window.location.href = '/projects/newProject'}>Créer un projet</button>
              <br />
                <br />

              

              
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