import { Checkbox, IconButton } from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  SaveOutlined as SaveIcon,
  CancelOutlined as CancelIcon,
  DragIndicator,
} from "@material-ui/icons";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import {
  TextFlex,
  GridContent,
  TaskerItem,
  FlexUl,
  FlexLi,
  FlexDiv,
  TextInput,
  Form,
} from "../../styles/Components";
import { usePositionReorder } from "../../hooks/use-position-reorder";
import { useMeasurePosition } from "../../hooks/use-measure-position";

export const ListofTasks: FC<ITasks> = ({
  tasks,
  setTasks,
  onDelete,
  onEdit,
  inEdit,
  onSave,
  onCancel,
}: ITasks) => {
  const [order, updatePosition, updateOrder, setOrder] = usePositionReorder(
    tasks
  );

  useEffect(() => {
    tasks !== order && setTasks(order);
  }, [order]);

  useEffect(() => {
    tasks !== order && setOrder(tasks);
  }, [tasks]);

  order && <div>Sin Tareas</div>;

  return (
    <TaskerItem>
      <GridContent>
        <FlexUl>
          {order.map((task: any, i: any) => (
            <Item
              key={task.id}
              task={task}
              i={i}
              updatePosition={updatePosition}
              updateOrder={updateOrder}
              onDelete={onDelete}
              onEdit={onEdit}
              inEdit={inEdit}
              onSave={onSave}
              onCancel={onCancel}
            />
          ))}
        </FlexUl>
      </GridContent>
    </TaskerItem>
  );
};

const Item = (props) => {

  const {
    i,
    task,
    updatePosition,
    updateOrder,
    onDelete,
    onEdit,
    inEdit,
    onSave,
    onCancel,
  } = props;
  
  //estado de drag and drop del item
  const [getEditTask, setEditTask] = useState<string>(task.task);
  const [getEditTime, setEditTime] = useState<number | string>(task.time);
  const [isDragging, setDragging] = useState(false);
  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  return (
    <FlexLi style={{ padding: 0, zIndex: isDragging ? 3 : 1 }}>
      <FlexDiv
        ref={ref}
        layout
        initial={false}
        style={{ background: "white", height: "48px", borderRadius: 5 }}
        whileDrag={{
          scale: 1.02,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        drag="y"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate);
        }}
      >
        <Checkbox />
        {inEdit === task.id ? (
          <Form>
            <TextInput
              label="Tarea"
              variant="outlined"
              margin="dense"
              value={getEditTask}
              type="text"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEditTask(e.target.value)
              }
            />
            <TextInput
              label="Tiempo"
              variant="outlined"
              margin="dense"
              type="number"
              value={getEditTime}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEditTime(e.target.value)
              }
            />
          </Form>
        ) : (
          <TextFlex>
            <TextFlex>{task.task}</TextFlex>
            <TextFlex>{task.time}</TextFlex>
          </TextFlex>
        )}
        {inEdit === task.id ? (
          <>
            <IconButton
              children={<SaveIcon />}
              onClick={() =>
                onSave({
                  id: task.id,
                  task: getEditTask,
                  time: getEditTime,
                  status: 0,
                })
              }
            />
            <IconButton children={<CancelIcon />} onClick={() => onCancel()} />
          </>
        ) : (
          <>
            <IconButton
              children={<EditIcon />}
              onClick={() => onEdit(task.id)}
            />
            <IconButton
              children={<DeleteIcon />}
              onClick={() => onDelete(task.id)}
            />
          </>
        )}
        <IconButton children={<DragIndicator />} disabled />
      </FlexDiv>
    </FlexLi>
  );
};
