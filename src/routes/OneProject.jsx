import { useParams } from 'react-router-dom';
import Header from '../header/header';
import './oneproject.css';

function OneProject() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/projects/${id}`);
        if (!response.ok) {
          throw new Error(`Une erreur s'est produite: ${response.statusText}`);
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProject();
  }, [id]);

  const deleteProject = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_BACKEND_URL + `/api/projects/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`Une erreur s'est produite: ${response.statusText}`);
      }
      window.location.href = `/projects/`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="one-project-page">
        {project && (
          <>
            <div>
              <p><strong>Images:</strong></p>
              <img src={project.lienImage} alt="Image du projet" />
            </div>
            <h1>{project.titre}</h1>
            <p><strong>Description Intro:</strong> {project.descriptionIntro}</p>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Liste de Mots Clés:</strong> {project.ListeMotCle}</p>
            <p><strong>Lien GitHub:</strong> {project.lienGitHub}</p>
            <p><strong>Nombre de Vues:</strong> {project.nbVue}</p>
            
            <div className="buttons-container">
              <button onClick={deleteProject}>Supprimer le projet</button>
              <button onClick={() => window.location.href = `/projects/update/${id}`}>Modifier le projet</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OneProject;
