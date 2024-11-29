import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
function Skills() {
  const { theme, toggleTheme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="PYTHON"/>
            <SkillList src={checkMarkIcon} skill="LATEX"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JAVASCRIPT"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
