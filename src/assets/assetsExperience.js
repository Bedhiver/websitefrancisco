import worldlineLogo from "./worldline-logo.png";
import commerceLogo from "./commerce-logo.png";

export const imgArray = [
  {
    img: worldlineLogo,
    title: "Développeur Java 8/Angular 8",
    period: "Jan - Avr 2020",
    content: [
      {
        subTitle: "Back-end",
        description:
          "Generic DAO, Deserializers, Pattern Factory, Hibernate5, Call d'API, Création API REST",
      },
      {
        subTitle: "Front-end",
        description: "TypeScript, Material UI, Bootstrap",
      },
      {
        subTitle: "Base de données",
        description:
          "MySQL, création de tables avec Foreign Key et cardinalités pour le MCD",
      },
      {
        subTitle: "Projet",
        description:
          "Portail web de sécurité qui permet de récupérer les KPIs concernant la sécurité du code et des dépendances des projets Worldline. En équipe de 5 personnes",
      },
    ],
  },
  {
    img: commerceLogo,
    title: "Emplois dans le commerce",
    period: "2015 - 2019",
    content: [
      {
        subTitle: "Vendeur multimédia",
        description:
          "Vendeur au rayon multimédia à Auchan Noyelles-Godault durant un stage",
      },
      {
        subTitle: "Conseiller assurance",
        description: "Conseiller en assurance chez Gan durant un stage",
      },
      {
        subTitle: "Chargé de clientèle professionnelle",
        description:
          "Conseiller chargé de prendre rendez-vous avec des professionnels (directeurs, ingénieurs, responsables, ...) pour le compte des commerciaux terrains",
      },
      {
        subTitle: "Téléconseiller",
        description: "Téléconseiller au service résiliation de SFR",
      },
    ],
  },
];
