import { nanoid } from "nanoid";

const timehour = new Date()
timehour.setDate(8)
timehour.setHours(1)
timehour.setMinutes(0)
timehour.setSeconds(0)

const time30 = new Date()
time30.setDate(4)
time30.setHours(0)
time30.setMinutes(30)
time30.setSeconds(0)

const time45 = new Date()
time45.setDate(1)
time45.setHours(0)
time45.setMinutes(45)
time45.setSeconds(0)

export const defaultTempData = [{ id: nanoid(), task: "test1", time: time30 }];
export const defaultTempHistoryData = [{ id: nanoid(), task: "test2", time: timehour }];
export const demoData = [
    { id: nanoid(), task: "tarea0", time: time30 },
    { id: nanoid(), task: "tarea1", time: timehour },
    { id: nanoid(), task: "tarea2", time: timehour },
    { id: nanoid(), task: "tarea3", time: timehour },
    { id: nanoid(), task: "tarea4", time: timehour },
    { id: nanoid(), task: "tarea5", time: timehour },
    { id: nanoid(), task: "tarea6", time: timehour },
    { id: nanoid(), task: "tarea7", time: timehour },
    { id: nanoid(), task: "tarea8", time: timehour },
    { id: nanoid(), task: "tarea9", time: timehour },
    { id: nanoid(), task: "tarea10", time: timehour },
    { id: nanoid(), task: "tarea11", time: time45 },
    { id: nanoid(), task: "tarea12", time: time45 },
    { id: nanoid(), task: "tarea13", time: time45 },
    { id: nanoid(), task: "tarea14", time: time45 },
    { id: nanoid(), task: "tarea15", time: time45 },
    { id: nanoid(), task: "tarea16", time: time45 },
    { id: nanoid(), task: "tarea17", time: time45 },
    { id: nanoid(), task: "tarea18", time: time45 },
    { id: nanoid(), task: "tarea19", time: time45 },
    { id: nanoid(), task: "tarea20", time: time45 },
    { id: nanoid(), task: "tarea21", time: time45 },
    { id: nanoid(), task: "tarea22", time: time45 },
    { id: nanoid(), task: "tarea23", time: time45 },
    { id: nanoid(), task: "tarea25", time: time45 },
    { id: nanoid(), task: "tarea26", time: time45 },
    { id: nanoid(), task: "tarea27", time: time45 },
    { id: nanoid(), task: "tarea28", time: time45 },
    { id: nanoid(), task: "tarea29", time: time45 },
    { id: nanoid(), task: "tarea30", time: time45 },
    { id: nanoid(), task: "tarea31", time: time45 },
    { id: nanoid(), task: "tarea32", time: time45 },
    { id: nanoid(), task: "tarea33", time: time45 },
    { id: nanoid(), task: "tarea34", time: time45 },
    { id: nanoid(), task: "tarea35", time: time30 },
    { id: nanoid(), task: "tarea36", time: time30 },
    { id: nanoid(), task: "tarea37", time: time30 },
    { id: nanoid(), task: "tarea38", time: time30 },
    { id: nanoid(), task: "tarea39", time: time30 },
    { id: nanoid(), task: "tarea40", time: time30 },
    { id: nanoid(), task: "tarea41", time: time30 },
    { id: nanoid(), task: "tarea42", time: time30 },
    { id: nanoid(), task: "tarea43", time: time30 },
    { id: nanoid(), task: "tarea44", time: time30 },
    { id: nanoid(), task: "tarea45", time: time30 },
    { id: nanoid(), task: "tarea46", time: time30 },
    { id: nanoid(), task: "tarea47", time: time30 },
    { id: nanoid(), task: "tarea48", time: time30 },
    { id: nanoid(), task: "tarea49", time: time30 },
    { id: nanoid(), task: "tarea50", time: time30 },
]