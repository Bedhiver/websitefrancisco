import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import PhoneIcon from "@material-ui/icons/Phone";

const categoriesDrawerLeft = [
  {
    categoryName: "Accueil",
    icon: HomeIcon,
    path: "/",
  },
  {
    categoryName: "Expérience",
    icon: WorkIcon,
    path: "/experience",
  },
  {
    categoryName: "Projets",
    icon: FolderSpecialIcon,
    path: "/projects",
  },
  {
    categoryName: "Jeu",
    icon: SportsEsportsIcon,
    path: "/games",
  },
  {
    categoryName: "Contact",
    icon: PhoneIcon,
    path: "/contact",
  },
];

export default categoriesDrawerLeft;
