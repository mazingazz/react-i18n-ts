import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
export default function PageContent(props: any) {
  const { isDarkMode } = useContext(ThemeContext);
  const style = {
    background: isDarkMode ? "#4a4747" : "white",
    color: isDarkMode ? "white" : "#4a4747",
    height: "100vh",
    width: "100vw",
  };
  return <div style={style}>{props.children}</div>;
}
