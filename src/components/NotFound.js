import { Button } from "@material-ui/core";
import CustomLink from "./CustomLink";

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 - Not Found !</h1>
      <CustomLink
        to="/"
        content={
          <Button variant="contained" color="primary">
            Retour au menu
          </Button>
        }
      />
    </div>
  );
}
