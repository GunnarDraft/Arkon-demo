import { Chart } from "../components/Tasker/Chart";
import { Base } from "../styles/Components";
import { CssBaseline } from "@material-ui/core";
import { Tasker } from "../components/Tasker/Tasker";
import { createGlobalStyle } from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#32979b" },
    secondary: { main: "#be6a1b" },
  },
});
const GlobalStyle = createGlobalStyle`
& * {outline:none !important;}
& .MuiDataGrid-row{ 
  box-sizing:border-box;
} 
& .MuiDataGrid-cell{ 
background:#fefefe;
box-sizing:border-box;
  &:first-child{ 
    border-radius:6px 0 0 6px;
  }
  &:last-child{ 
  border-radius:0 6px 6px 0;
  }
} 
 
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <CssBaseline />
        <GlobalStyle />
        <Tasker />
        <Chart />
      </Base>
    </ThemeProvider>
  );
}
