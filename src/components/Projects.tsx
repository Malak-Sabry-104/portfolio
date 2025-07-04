import images from "../assets/images.png"
const Projects = () => {
  return <>
  <section id="projects">
  <h2>Projects</h2>
  <div className="cards">
    <div className="card">
      <img src={images} alt=" project img" />
      <h6>project name</h6>
      <p>project desc</p>
      <button>gitrepo</button>
      <button>demo</button>
    </div>
  </div>
  </section>
  </>;
};

export default Projects;
