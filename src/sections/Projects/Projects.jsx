import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import burger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import styles from "./ProjectsStyles.module.css";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projekt</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link=""
          h3="Induktionsvägar"
          p="Raport som utreder Induktionsvägar"
        />
        <ProjectCard
          src={burger}
          link=""
          h3="P uppgift Programering"
          p="Slutarbete i kursen DD1319"
        />
        <ProjectCard
          src={hipsster}
          link="https://drive.google.com/file/d/1HDaVu-mbYfdHTvwIw_G2uDPNpe6j0Xy4/view?usp=sharing"
          h3="Gymnasiearbete"
          p="Mitt gymnasiearbete"
        />
      </div>
    </section>
  );
}

export default Projects;