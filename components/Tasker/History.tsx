import {
  TaskerContent,
  TextTitle,
  GridContent,
  FlexRow,
} from "../../styles/Components";
import { GridColDef } from "@material-ui/data-grid";
import React, { FC } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES, DataGrid } from "@material-ui/data-grid";
const theme = createMuiTheme(
  {
    palette: {
      primary: { main: "#32979b" },
      secondary: { main: "#be6a1b" },
    },
  },
  esES
);
export const History: FC<IHistory> = ({ tasks }: IHistory) => {
  const columns: GridColDef[] = [
    {
      field: "task",
      headerName: "Tareas",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Tiempo",
      flex: 1,
    }
  ];
  tasks && <div>Sin Tareas</div>;

  return (
    <FlexRow>
      <TaskerContent>
        <TextTitle>Historial</TextTitle>
        <GridContent>
          <ThemeProvider theme={theme}>
            <DataGrid
              rows={tasks}
              columns={columns}
              density="standard"
              hideFooterPagination
              hideFooter
              disableColumnSelector
              disableExtendRowFullWidth
              disableSelectionOnClick
              hideFooterSelectedRowCount
              hideFooterRowCount
              {...tasks}
            />
          </ThemeProvider>
        </GridContent>
      </TaskerContent>
    </FlexRow>
  );
};
