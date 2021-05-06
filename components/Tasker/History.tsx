import {
  TaskerContent,
  FlexData,
  TextTitle,
  GridContent,
  FlexRow,
} from "../../styles/Components";
import { GridColDef } from "@material-ui/data-grid";
import { FC } from "react";

export const History: FC<IHistory> = ({ tasks }: IHistory) => {
  const columns: GridColDef[] = [
    {
      field: "task",
      headerName: "task",
      flex: 1,
    },
    {
      field: "time",
      headerName: "time",
      flex: 1,
    },
  ];
  tasks && <div>Sin Tareas</div>;

  return (
    <FlexRow>
      <TaskerContent>
        <TextTitle>Historial</TextTitle>
        <GridContent>
          <FlexData
            rows={tasks}
            columns={columns}
            density="standard"
            hideFooterPagination
            hideFooter
            disableColumnSelector
            {...tasks}
          />
        </GridContent>
      </TaskerContent>
    </FlexRow>
  );
};
