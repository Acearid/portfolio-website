import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/myself.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const LinkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Noel
          <br />
          Dansell
        </h1>
        <h2>
         Student På Kungliga Tekniska Högskolan
        </h2>
        <span>
          <a href="https://linkedin.com/in/noeldansell" target="_blank_">
            <img src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/Acearid" target="_blank_">
            <img src={githubIcon} alt="github Icon" />
          </a>
        </span>
        <p className={styles.description}>
          På programmet för Civilingejör och lärare med inriktning mot datateknik
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
