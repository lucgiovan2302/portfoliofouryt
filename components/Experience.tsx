import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiFreelancer, SiQuantconnect, SiReact, SiWebpack, SiNextui } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Expériences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Stica COSOURCING"
          subTitle="Responsable informatique 2022 - Présent"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Embassade Japon"
          subTitle="Developpeur web 2019 - 2022"
          icon={<SiReact />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="Développeur web 2014 - Présent"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Vivetic Madcom"
          subTitle="Techinicien Maintenace Informatique 2014 - 2019"
          icon={<SiWebpack />}
        />

        <ExperienceCard
          title="Smartone"
          subTitle="Webdesigner 2011 - 2014"
          icon={<SiNextui />}
        />

        <ExperienceCard
          title="EMPS Mahamasina"
          subTitle="Administrateur réseaux et systèmes 2009 - 2011"
          icon={<SiQuantconnect />}
        />
      </div>
    </div>
  );
};

export default Experience;