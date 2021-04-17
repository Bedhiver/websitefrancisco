import { FormControlLabel, Switch } from "@material-ui/core";
import { useState } from "react";

export default function SwitchTheme(props) {
  
//     const [state, setState, labelName] = useState({
//     checked: true,
//   });

//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.checked}
          onChange={props.onChange}
          name="checked"
          color="secondary"
        />
      }
      label={props.label}
    />
  );
}
