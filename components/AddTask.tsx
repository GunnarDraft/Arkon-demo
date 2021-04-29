import { useState, ChangeEvent } from 'react';
import { Button, TextField } from '@material-ui/core'
import { nanoid } from 'nanoid';

export const AddTask = ({ onAdd }: any) => {

    const [getTask, setTask] = useState("");

    const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!getTask) {

    } else {
        const newTodo = {
            id: nanoid(),
            body: getTask
        };
        onAdd(newTodo);
        setTask("");
    }
};

return (
    <form onSubmit={handleSubmit}>
        <TextField
            variant="filled" 
            value={getTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        />
        <Button onClick={handleSubmit}>
            Add Task
        </Button>
    </form>
);
}

