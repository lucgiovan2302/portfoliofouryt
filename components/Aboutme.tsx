import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="Apropos" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        Je suis un développeur web avec 5 années d'expérience en React. Une
        de solides bases en développement front-end. Des expériences 
        sur une variété de projets,y compris la construction et la maintenance 
        applications à page unique, la mise en œuvre de principes de conception 
        responsive design. Je suis également compétent dans des utilisation des outils 
        tels que Webpack, npm, et Git pour le développement et le déploiement. 
        En plus de mes compétences techniques. Je suis capable de travailler avec des équipes 
        interfonctionnelles et apprendre de nouvelles technologies si nécessaire.
        </p>
        <p>
        Je cherche toujours à améliorer mes compétences et à me tenir au courant 
        des dernières meilleures pratiques en matière de développement web. 
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
