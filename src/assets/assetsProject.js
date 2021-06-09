import { Button, Typography } from "@material-ui/core";
import CustomExternalUrl from "../components/CustomExternalUrl";
import pongScreen from "./pongScreen.png";
import "./../styles/test.css";

const links = [
  {
    wordLinked: "Phaser 3",
    url: "https://phaser.io/phaser3",
  },
  {
    wordLinked: "Electron",
    url: "https://www.electronjs.org/",
  },
  {
    wordLinked: "Node.js",
    url: "https://nodejs.org/fr/",
  },
  {
    wordLinked: "Vue.js",
    url: "https://vuejs.org/",
  },
  {
    wordLinked: "PostgreSQL",
    url: "https://www.postgresql.org/",
  },
  {
    wordLinked: "NestJS",
    url: "https://nestjs.com/",
  },
  {
    wordLinked: "Express.js",
    url: "https://expressjs.com/",
  },
  {
    wordLinked: "MongoDB",
    url: "https://www.mongodb.com/fr-fr",
  },
  {
    wordLinked: "Docker",
    url: "https://www.docker.com/",
  },
];

function handleCorrectItem(wordLinked) {
  return links.find((element) => element.wordLinked === wordLinked);
}

export const imgArray = [
  {
    id: 1,
    github: "https://github.com/Bedhiver/GameElectron",
    img: pongScreen,
    title: "Jeu du Ping Pong",
    content: [
      {
        subTitle: "",
        description: (
          <Typography color="textSecondary">
            J'ai créé un jeu de ping pong jouable à deux joueurs sur le même
            clavier afin d'explorer plus en détails les possibilités de
            JavaScript. C'est un jeu Desktop téléchargeable sur les trois
            plateformes : macOS, Linux et Windows. Pour le réaliser j'ai utlisé
            deux frameworks. Pour faire ce jeu j'ai donc eu besoin d'un moteur
            de jeu,{" "}
            {
              <CustomExternalUrl // Phaser 3
                link={handleCorrectItem("Phaser 3")}
                isDecoration={true}
              />
            }
            . Ensuite, pour pouvoir en faire un jeu desktop j'ai appris à
            manipuler{" "}
            {
              <CustomExternalUrl // Electron
                link={handleCorrectItem("Electron")}
                isDecoration={true}
              />
            }
            .
          </Typography>
        ),
      },
      {
        subTitle: "",
        description:
          "J'ai finalement utilisé le package npm electron-packager pour déployer mon jeu sur les différentes plateformes.",
      },
      {
        subTitle: "Téléchargements",
        description: (
          <div>
            <Typography>
              Voici les liens permettant de télécharger le jeu en fonction de
              votre plateforme (macOS, Windows, Linux).
            </Typography>
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Button variant={"outlined"}>
                <CustomExternalUrl
                  link={{
                    wordLinked: "Linux",
                    url: "https://github.com/Bedhiver/GameElectron/releases/download/0.1.2/GameElectron-Linux.zip",
                  }}
                  isDecoration={false}
                />
              </Button>
              <Button variant={"outlined"}>
                <CustomExternalUrl
                  link={{
                    wordLinked: "macOS",
                    url: "https://github.com/Bedhiver/GameElectron/releases/download/0.1.1/GameElectron-macOS.zip",
                  }}
                  isDecoration={false}
                />
              </Button>
              <Button variant={"outlined"}>
                <CustomExternalUrl
                  link={{
                    wordLinked: "Windows",
                    url: "https://github.com/Bedhiver/GameElectron/releases/download/0.1.0/GameElectron-Windows.zip",
                  }}
                  isDecoration={false}
                />
              </Button>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    github: "https://github.com/Bedhiver/MyChest",
    title: "Coffre-fort numérique",
    content: [
      {
        subTitle: "",
        description: (
          <Typography color="textSecondary">
            j'ai commencé un projet pour réaliser un coffre-fort numérique avec{" "}
            {
              <CustomExternalUrl // Node.js
                link={handleCorrectItem("Node.js")}
                isDecoration={true}
              />
            }{" "}
            pour le back-end,{" "}
            {
              <CustomExternalUrl // Vue.js
                link={handleCorrectItem("Vue.js")}
                isDecoration={true}
              />
            }{" "}
            pour le front-end et{" "}
            {
              <CustomExternalUrl // PostgreSQL
                link={handleCorrectItem("PostgreSQL")}
                isDecoration={true}
              />
            }{" "}
            pour la base de données. Le but est de pouvoir enregistrer les mots
            de passes hashés concernant plusieurs comptes (email, banques,
            etc.).
          </Typography>
        ),
      },
      {
        subTitle: "",
        description: (
          <Typography color="textSecondary">
            Pour le back-end, j'ai plus particulièrement utilisé le framework{" "}
            {
              <CustomExternalUrl // NestJS
                link={handleCorrectItem("NestJS")}
                isDecoration={true}
              />
            }
            . Et j'ai également hébergé la base de données sous{" "}
            {
              <CustomExternalUrl // docker
                link={handleCorrectItem("Docker")}
                isDecoration={true}
              />
            }
          </Typography>
        ),
      },
    ],
  },
  {
    id: 3,
    github: "https://github.com/Bedhiver/POCs",
    title: "POCs",
    content: [
      {
        subTitle: "",
        description: (
          <Typography color="textSecondary">
            J'ai fait une multitude de pocs sur{" "}
            {
              <CustomExternalUrl // Node.js
                link={handleCorrectItem("Node.js")}
                isDecoration={true}
              />
            }{" "}
            avec le framework{" "}
            {
              <CustomExternalUrl // Express.js
                link={handleCorrectItem("Express.js")}
                isDecoration={true}
              />
            }{" "}
            pour tester plusieurs façon de créer une API avec ce framework. Ici,
            l'objectif était de me familiariser avec ce langage. De plus, j'ai
            également hébergé une base de données{" "}
            {
              <CustomExternalUrl // MongoDB
                link={handleCorrectItem("MongoDB")}
                isDecoration={true}
              />
            }{" "}
            sous{" "}
            {
              <CustomExternalUrl // docker
                link={handleCorrectItem("Docker")}
                isDecoration={true}
              />
            }
            .
          </Typography>
        ),
      },
    ],
  },
];
