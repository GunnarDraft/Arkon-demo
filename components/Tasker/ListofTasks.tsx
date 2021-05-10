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
  TaskerItem,
  FlexUl,
  FlexLi,
  FlexDiv,
  TextInput,
  Form,
} from "../../styles/Components";
import { usePositionReorder } from "../../hooks/use-position-reorder";
import { useMeasurePosition } from "../../hooks/use-measure-position";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const ListofTasks: FC<ITasks> = ({
  tasks,
  setTasks,
  onDelete,
  onEdit,
  inEdit,
  onSave,
  onCancel,
  onFinish,
}: ITasks) => {
  const [order, updatePosition, updateOrder, setOrder] = usePositionReorder(
    tasks
  );
  //fix bind data
  //como los datos puedes mutar de 2 origenes igualo los datos si alguno cambia
  useEffect(() => {
    tasks !== order && setTasks(order);
  }, [order]);

  useEffect(() => {
    tasks !== order && setOrder(tasks);
  }, [tasks]);

  //validamos que exista el orden

  order && <div>Sin Tareas</div>;

  return (
    <TaskerItem>
      <FlexUl>
        {order.map((task: ITask, i: number) => (
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
            onFinish={onFinish}
          />
        ))}
      </FlexUl>
    </TaskerItem>
  );
};

const Item = (props: IItem) => {
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
    onFinish,
  } = props;

  //estado de drag and drop del item
  const [getEditTask, setEditTask] = useState<string>(task.task);
  let tempDate = new Date();
  tempDate.setMinutes(task.time.getMinutes());
  tempDate.setSeconds(task.time.getSeconds());
  const [selectedDate, handleDateChange] = useState(tempDate);

  const [isDragging, setDragging] = useState(false);
  const ref = useMeasurePosition((pos: any) => updatePosition(i, pos));

  return (
    <FlexLi style={{ padding: 0, zIndex: isDragging ? 3 : 2 }}>
      <FlexDiv
        ref={ref}
        layout
        initial={false}
        style={{
          background: "white",
          height: "50px",
          borderRadius: 5,
          flex: 1,
          overflow: "hidden",
        }}
        whileDrag={{
          scale: 1.02,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        dragConstraints={{
          top: -60,
          bottom: 60,
        }}
        drag="y"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate);
        }}
      >
        <Checkbox color="primary" disabled={i !== 0} onChange={onFinish} />
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
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                ampm={false}
                openTo="minutes"
                views={["minutes", "seconds"]}
                format="mm:ss"
                label="Tiempo"
                inputVariant="outlined"
                margin="dense"
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Form>
        ) : (
          <TextFlex>
            <TextFlex>{task.task}</TextFlex>
            <TextFlex>
              {task.time.getMinutes()}:{task.time.getSeconds()}
            </TextFlex>
          </TextFlex>
        )}
        {inEdit === task.id ? (
          <>
            <IconButton
              color="primary"
              children={<SaveIcon />}
              onClick={() =>
                onSave({
                  id: task.id,
                  task: getEditTask,
                  time: selectedDate
                })
              }
            />
            <IconButton
              color="secondary"
              children={<CancelIcon />}
              onClick={() => onCancel()}
            />
          </>
        ) : (
          <>
            <IconButton
              color="primary"
              children={<EditIcon />}
              onClick={() => onEdit(task.id)}
            />
            <IconButton
              color="secondary"
              children={<DeleteIcon />}
              onClick={() => onDelete(task.id)}
            />
          </>
        )}
        <IconButton color="primary" children={<DragIndicator />} disabled />
      </FlexDiv>
    </FlexLi>
  );
};
