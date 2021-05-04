import { GridContent, FlexData } from "../../styles/Components";
import { GridColDef } from "@material-ui/data-grid";
import { FC } from "react";

export const History: FC<ITasks> = ({ tasks }: IHistory) => {
  const columns: GridColDef[] = [
    {
      field: "task",
      headerName: "task",
      width: 160,
    },
    {
      field: "time",
      headerName: "time",
      width: 90,
    },
  ];
  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <GridContent>
      <FlexData
        rows={tasks.filter((task: any) => task.status === "done")}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        pagination
        density="compact"
        {...tasks}
      />
    </GridContent>
  );
};
