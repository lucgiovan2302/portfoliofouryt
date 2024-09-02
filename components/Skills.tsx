import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Compétence" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link=""
        />
        <SkillsInput title="PHP" link="" />
        <SkillsInput title="Reactjs" link="" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="UI Design" link="" />
        <SkillsInput
          title="Adobe Illustrator"
          link=""
        />
        <SkillsInput
          title="Adobe Photoshop"
          link=""
        />
      </div>
    </div>
  );
};

export default Skills;
