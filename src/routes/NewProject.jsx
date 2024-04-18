import { useState } from 'react';

function NewProject() {
    const [project, setProject] = useState();
    const createProject = async (title, description, keywords, imageLink, githubLink, imageList, viewCount) => {
        console.log('Création d\'un projet');
        const response = await fetch('http://localhost:3000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "titre": title,
                "descriptionIntro": description,
                "description": description,
                "ListeMotCle": keywords,
                "lienImage": imageLink,
                "lienGitHub": githubLink,
                "listeImmages": imageList,
                "nbVue": viewCount
            })
        
        });
        if (!response.ok) {
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
            setProject(data);
            console.log('projet id:', data._id);
            //renvoyer vers une autre page web
            window.location.href = `/projects/${data._id}`;
           
            
        }
    };

return (
    <div>
        
        <h1>New Project</h1>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Keywords" />
            <input type="text" placeholder="Image Link" />
            <input type="text" placeholder="GitHub Link" />
            <input type="text" placeholder="Image List" />
            <input type="text" placeholder="View Count" />
            <br />
            <br />
            
            <button onClick={async () => {
                await createProject(
                    document.querySelector('input[placeholder="Title"]').value,
                    document.querySelector('input[placeholder="Description"]').value,
                    document.querySelector('input[placeholder="Keywords"]').value,
                    document.querySelector('input[placeholder="Image Link"]').value,
                    document.querySelector('input[placeholder="GitHub Link"]').value,
                    document.querySelector('input[placeholder="Image List"]').value,
                    document.querySelector('input[placeholder="View Count"]').value
                );
                //window.location.href = `/projects/${proj._id}`; // Replace 'other-page' with the actual URL of the other page you want to navigate to
            }}>Create Project</button>
            
    </div>
);
}

export default NewProject;