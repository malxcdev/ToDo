
import "./App.css";
import Search from './components/Search'
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
function App() {

  return (
    <div className="font-poppins w-80 flex flex-col justify-center items-center gap-2">
      <h2 className="text-[1.4rem] font-bold">Lista de Tareas Pendientes</h2>
      <Search />
      <TodoList>
        <Todo />
      </TodoList>
    </div>
  );
}

export default App;
