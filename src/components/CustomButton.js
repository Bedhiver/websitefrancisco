import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

function CustomButton() {
  const classes = useStyles();

  return (
    <Button className={classes.root} variant="contained" color="primary">
      Hello World Custom
    </Button>
  );
}

export default CustomButton;
