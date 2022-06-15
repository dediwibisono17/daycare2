import { Button } from "@mui/material";
import styles from "./Button.module.scss"

const ButtonUI = (props) => {
  const { children, variant, color, customClass, endIconMaterial, startIconMaterial} = props;

  return (
    <Button
      variant={variant}
      color={color}
      className={`${customClass}`}
      endIcon={endIconMaterial}
      startIcon={startIconMaterial}
    //   endIcon={<SendIcon />}
    //   {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonUI;
