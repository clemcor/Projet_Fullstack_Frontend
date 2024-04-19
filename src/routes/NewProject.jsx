import { useState } from 'react';
import Header from '../header/header';
import './newproject.css';

function NewProject() {
    const [project, setProject] = useState();

    const createProject = async (title, descriptionIntro, description, keywords, imageLink, githubLink, imageList, viewCount) => {
        console.log('Création d\'un projet');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + '/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "titre": title,
                "descriptionIntro": descriptionIntro,
                "description": description,
                "ListeMotCle": keywords,
                "lienImage": imageLink,
                "lienGitHub": githubLink,
                "listeImmages": imageList,
                "nbVue": viewCount
            })
        });
        if (!response.ok) {
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
            setProject(data);
            console.log('projet id:', data._id);
            window.location.href = `/projects/${data._id}`;
        }
    };

    return (
        <div>
            <Header />
            <br />
            <div className="new-project-page">
                <h1>New Project</h1>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Description introductive" maxLength={80} />
                <input type="text" placeholder="Description" />
                <input type="text" placeholder="Keywords" />
                <input type="text" placeholder="Image Link" />
                <input type="text" placeholder="GitHub Link" />
                <input type="text" placeholder="Image List" />
                <br />
                <br />
                <button onClick={async () => {
                    await createProject(
                        document.querySelector('input[placeholder="Title"]').value,
                        document.querySelector('input[placeholder="Description introductive"]').value,
                        document.querySelector('input[placeholder="Description"]').value,
                        document.querySelector('input[placeholder="Keywords"]').value,
                        document.querySelector('input[placeholder="Image Link"]').value,
                        document.querySelector('input[placeholder="GitHub Link"]').value,
                        document.querySelector('input[placeholder="Image List"]').value,
                        0
                    );
                }}>Create Project</button>
            </div>
        </div>
    );
}

export default NewProject;
