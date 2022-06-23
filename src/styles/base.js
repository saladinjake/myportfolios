import { ThemeProvider as MyPortfolioTheme } from 'styled-components';

import theme from "../themes/theme";
import GlobalStyles from './globals';

const ThemeJacket = ({ children }) => (
  <MyPortfolioTheme theme={theme}>
    <GlobalStyles />
    {children}
  </MyPortfolioTheme>
);

export default ThemeJacket;