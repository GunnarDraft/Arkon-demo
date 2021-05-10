import {
  TaskerContent,
  TextTitle,
  GridContent,
  ButtonPrimary,
  FlexData,
} from "../../styles/Components";
import { GridColDef } from "@material-ui/data-grid";
import React, { FC } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES } from "@material-ui/data-grid";
const theme = createMuiTheme(
  {
    palette: {
      primary: { main: "#32979b" },
      secondary: { main: "#be6a1b" },
    },
  },
  esES
);
export const History: FC<IHistory> = ({ tasks, addData }: IHistory) => {

  //definicion de la columnas del datagrid
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
      type:'dateTime'
    },
  ];

  tasks && <div>Sin Tareas</div>;

  return ( 
      <TaskerContent>
        <TextTitle>
          Historial 
          <ButtonPrimary variant="outlined" color="primary" onClick={addData}>
            Agregar datos
          </ButtonPrimary>
        </TextTitle>
        <GridContent>
          <ThemeProvider theme={theme}>
            <FlexData
              rows={tasks}
              columns={columns}
              density="standard"  
              disableColumnSelector
              disableExtendRowFullWidth
              disableSelectionOnClick
              hideFooterSelectedRowCount 
              {...tasks}
            />
          </ThemeProvider>
        </GridContent>
      </TaskerContent> 
  );
};
