import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../header/header';
import './newproject.css'; // Import du fichier CSS pour styliser la page



function UpdateProject() {
    const [project, setProject] = useState();
    const { id } = useParams();


    const getProject = async () => {
        console.log('Affichage des projets');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + `/api/projects/${id}` );
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

    const updateProject = async (title, descriptionIntro,description, keywords, imageLink, githubLink, imageList, viewCount) => {
        console.log('Modification d\'un projet');
        const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + `/api/projects/${id}`, {
            method: 'PUT',
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
            // Gérer l'erreur
            console.error('Une erreur s\'est produite:', response.statusText);
        } else {
            const data = await response.json();
            console.log('Réponse du serveur:', data);
            window.location.href = `/projects/${data._id}`;
        }
    };

    useEffect(() => {
        getProject();
    }, []);







return (
    <div>
        <Header />
        <br />
        <div className="new-project-page">
            <h1>Update project</h1>
            <br />
            <input type="text" placeholder="Title" value={project?.titre} onChange={(e) => setProject({ ...project, titre: e.target.value })} />
            <input type="text" placeholder="Description introductive" maxLength={80} value={project?.descriptionIntro} onChange={(e) => setProject({ ...project, descriptionIntro: e.target.value })} />
            <input type="text" placeholder="Description" value={project?.description} onChange={(e) => setProject({ ...project, description: e.target.value })} />
            <input type="text" placeholder="Keywords" value={project?.ListeMotCle?.join(", ")} onChange={(e) => setProject({ ...project, ListeMotCle: e.target.value.split(", ") })} />
            <input type="text" placeholder="Image Link" value={project?.lienImage} onChange={(e) => setProject({ ...project, lienImage: e.target.value })} />
            <input type="text" placeholder="GitHub Link" value={project?.lienGitHub} onChange={(e) => setProject({ ...project, lienGitHub: e.target.value })} />
            <input type="text" placeholder="Image List" value={project?.listeImmages?.join(", ")} onChange={(e) => setProject({ ...project, listeImmages: e.target.value.split(", ") })} />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={async () => {
                    await updateProject(
                        document.querySelector('input[placeholder="Title"]').value,
                        document.querySelector('input[placeholder="Description introductive"]').value,
                        document.querySelector('input[placeholder="Description"]').value,
                        document.querySelector('input[placeholder="Keywords"]').value.split(","),
                        document.querySelector('input[placeholder="Image Link"]').value,
                        document.querySelector('input[placeholder="GitHub Link"]').value,
                        document.querySelector('input[placeholder="Image List"]').value.split(","), 0
                    );
                }}> Update Project </button>
            </div>
        </div>
    </div>
);
}

export default UpdateProject;