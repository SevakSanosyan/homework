import "./TodoList.css"
import { TodoWrite } from './TodoWrite'
export function TodoList({ text, setText }) {
    return(

        <div className="holder">
            <TodoWrite />

        </div>

    )
}