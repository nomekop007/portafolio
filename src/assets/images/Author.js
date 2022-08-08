import * as React from "react";
import { useTheme } from "@material-ui/styles";

const Logo = (props) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 378.9 110.9"
      {...props}
    >
      <text x="60" y="75" fill={theme.logoColor} font-size="50">
        DIEGO RIOS
      </text>
      <path
        fill="none"
        stroke={theme.logoColor}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M12.7 14.8h349.7v83.3H12.7z"
      />
    </svg>
  );
};

export default Logo;
