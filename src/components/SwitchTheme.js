import { FormControlLabel, Switch } from "@material-ui/core";
import { useState } from "react";

export default function SwitchTheme(props) {
  const [state, setState] = useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.switchModeTheme(state.checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          color="secondary"
        />
      }
      label={state.checked ? "Dark Thème" : "Light Thème"}
    />
  );
}
