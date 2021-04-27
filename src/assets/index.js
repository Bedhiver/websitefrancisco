import muisvg from "./material-ui-1.svg";
import reactsvg from "./react-1.svg";
import jssvg from "./logo-javascript.svg";

const svgArray = [
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

export default svgArray;
