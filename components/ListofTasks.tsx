import { IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'

export const ListofTasks = ({ tasks, onDelete }: any) => {
    if (!tasks?.length) {
        return <div>  No tasks </div>
    }
    return (<>{tasks && tasks.map((task: any) => {
        return <div key={task.id}>
            <p>{task.body}</p>
            <IconButton
                children={<Delete/>}
                onClick={() => onDelete(task.id)} />
        </div>
    })}
    </>)

}
