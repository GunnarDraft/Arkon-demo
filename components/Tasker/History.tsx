import { TaskerContent, FlexData, TextTitle,GridContent } from "../../styles/Components";
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
  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <TaskerContent>
      <TextTitle variant="h2">History</TextTitle>
      <GridContent>
        <FlexData
          rows={tasks.filter((task: any) => task.status === "done")}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          pagination
          density="comfortable"
          {...tasks}
        />
      </GridContent>
    </TaskerContent>
  );
};
