import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import myStyle from './../styles/MyStyle';

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 - Not Found !</h1>
      <Link to="/" style={myStyle.linkStyle} >
        <Button variant="contained" color="primary">
          Retour au menu
        </Button>
      </Link>
    </div>
  );
}
