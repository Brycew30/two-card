import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    darkGreen: "#35654d",
    darkerGreen: "#17241d",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
