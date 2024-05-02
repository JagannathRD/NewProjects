import { useReducer } from "react";

const initialValue = [];
const ACTION_ITEMS ={
    ADD_TASK :'ADD_TASK',
    DELETE_TASK : 'Delete_Task',
    RESET_TASK : 'RESET_TASKS'
}

const reducer=(state, action)=>{
    switch(action.type){
        case ACTION_ITEMS.ADD_TASK: return[
        ...state,{
            id:state.length+1,
            name: action.payload
        }
        ]
        case ACTION_ITEMS.DELETE_TASK: return state.filter(d=>d.id !== action.payload)
        case ACTION_ITEMS.RESET_TASK : return init(action.payload)
        default: return state;

    }

}

const init = (initialValue)=>{
    return initialValue;
}
const ToDo =()=>{
    const [todos, dispatch] = useReducer(reducer, initialValue, init);

    return(
        <>
        <div> ToDo List {todos.length}</div>
        <button onClick={()=>dispatch({type:ACTION_ITEMS.RESET_TASK, payload:initialValue})}>RESET</button>

        Enter a todo: <input type="text" onBlur={(e)=>dispatch({type:ACTION_ITEMS.ADD_TASK,payload:e.target.value})}></input>
        {todos.map((todo)=> <li key={todo.id}>{todo.name} <button onClick={()=>dispatch({type:ACTION_ITEMS.DELETE_TASK, payload:todo.id})}>Delete</button></li>
    )}
        </>
    )
}
export default ToDo;