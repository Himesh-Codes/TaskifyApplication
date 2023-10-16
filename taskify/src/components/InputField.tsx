import {useRef } from "react";
import { TaskState } from "../interfaces/task";
import "../App.css";

export default function InputField(inputProps: TaskState): React.JSX.Element{
    const inputFieldActive = useRef<HTMLInputElement>(null);

    return(
        <div className="formContainer">
            <form className="addTask" onSubmit={(event)=> HandleSubmit(inputProps, event, inputFieldActive)}>
                <input ref={inputFieldActive} type="text" placeholder="Enter the task" value={inputProps.task} onChange={(event)=> InputOnchange(event, inputProps.setTask)} className="inputField"/>
                <button className="addTaskBtn" type="submit">ADD</button>
            </form>
        </div>
    );
}

function HandleSubmit(inputProps: TaskState, event: React.FormEvent, inputFieldActive: React.RefObject<HTMLInputElement>){
    inputProps.addTasks(event);
    inputFieldActive.current?.blur();
}

function InputOnchange(event: React.ChangeEvent<HTMLInputElement>, setTask: React.Dispatch<React.SetStateAction<string>>){
    setTask(event.target.value)
}