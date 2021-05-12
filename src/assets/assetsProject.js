import pongScreen from "./pongScreen.png";

export const imgArray = [
  {
    id: 1,
    img: pongScreen,
    title: "Jeu du Ping Pong",
    content: [
      {
        subTitle: "",
        description:
          "J'ai décidé de créer un petit jeu de ping pong afin d'explorer plus en détails les possibilités de JavaScript. C'est un jeu Desktop téléchargeable sur les trois plateformes : macOS, Linux et Windows. Pour le réaliser j'ai utlisé deux frameworks. Pour faire un jeu j'ai donc eu besoin d'un moteur de jeu, Phaser 3. Ensuite, pour pouvoir en faire un jeu desktop j'ai appris à manipuler Electron.",
      },
      {
          subTitle: "",
          description: "J'ai finalement utilisé le package electron-packager pour déployer mon jeu sur les différentes plateformes.",
      },
      {
          subTitle: "Téléchargements",
          description: "Je mets donc les trois liens permettant de télécharger le jeu en fonction de votre plateforme.",
      },
    ],
  },
];
