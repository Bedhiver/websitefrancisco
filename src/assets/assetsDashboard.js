import muisvg from "./material-ui-1.svg";
import reactsvg from "./react-1.svg";
import jssvg from "./logo-javascript.svg";
import logoNode from "./nodejs-logo.png";
import logoNestjs from "./nestjs-logo.png";
import logoExpressjs from "./expressjs-logo.png";
import logoDocker from "./docker-logo.png";
import logoMongodb from "./mongodb-logo.png";
import logoMongoose from "./mongoose-logo.png";
import logoElasticsearch from "./elasticsearch-logo.png";
import logoElectron from "./electron-logo.png";
import logoReact from "./react-logo.png";
import logoVuejs from "./vuejs-logo.png";
import logoAngular from "./angular-logo.png";
import logoJavscript from "./javascript-logo.png";
import logoJava from "./java-logo.png";
import logoTypscript from "./typescript-logo.png";
import logoPostgresql from "./postgresql-logo.png";
// import developerType from './developerType.jpeg';

export const imgArray = [
  {
    img: jssvg,
    title: "Javascript",
    description:
      "JavaScript (JS) est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web.",
    website: "https://developer.mozilla.org/fr/",
  },
  {
    img: reactsvg,
    title: "React",
    description:
      "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript qui permet faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant du code HTML à chaque changement d'état.",
    website: "https://fr.reactjs.org/",
  },
  {
    img: muisvg,
    title: "Material UI",
    description:
      "Material UI est une bibliothèque de composants conçu pour React. Le développement web est donc plus facile et plus rapide.",
    website: "https://material-ui.com/",
  },
];

export const imgTechUsedArray = {
  language: [
    {
      img: logoJavscript,
      title: "JavaScript",
    },
    {
      img: logoTypscript,
      title: "TypeScript",
    },
    {
      img: logoJava,
      title: "Java",
    },
  ],
  back: [
    {
      img: logoNode,
      title: "Node.js",
    },
    {
      img: logoNestjs,
      title: "NestJS",
    },
    {
      img: logoExpressjs,
      title: "Express.js",
    },
    {
      img: logoMongoose,
      title: "mongoose",
    },
  ],
  front: [
    {
      img: logoReact,
      title: "React",
    },
    {
      img: logoVuejs,
      title: "Vue.js",
    },
    {
      img: logoAngular,
      title: "Angular 8",
    },
  ],
  database: [
    {
      img: logoMongodb,
      title: "MongoDB",
    },
    {
      img: logoPostgresql,
      title: "PostgreSQL",
    },
    {
      img: logoElasticsearch,
      title: "elasticsearch",
    },
  ],
  other: [
    {
      img: logoDocker,
      title: "docker",
    },
    {
      img: logoElectron,
      title: "Electron",
    },
  ],
};

export { default as developerWallpaper } from "./developerType.jpeg";
export { default as otherWallpaper } from "./otherWallpaper.jpeg";
