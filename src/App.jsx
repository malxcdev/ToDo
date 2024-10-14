import "./App.css";
import { useState } from 'react';

import Search from './components/Search';
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Button from "./components/Button"

const defaultTareas = [
  {
    text: 'Comprar Cebollas', completed: true
  },
  {
    text: 'Comprar Caballos', completed: false
  }
]

function App() {
  
  const [inputSearch, setInputSearch] =  useState('')
  const [tareas, setTareas] = useState(defaultTareas)

  const tareasCompletadas= tareas.filter(tarea => !!tarea.completed).length;
  console.log(tareasCompletadas);
  
  const tareasTotales = tareas.length;

  const searchedTareas = tareas.filter(
    (tarea) => { return  tarea.text.toLowerCase().includes(inputSearch.toLocaleLowerCase());}
  )

  
  return (
    <div className="font-poppins w-80 flex flex-col justify-center items-center gap-2">
      <h2 className="text-[1.4rem] font-bold">Lista de Tareas Pendientes</h2>
      <h4>Has completado {tareasCompletadas} de {tareasTotales} </h4>
      <Search
        inputSearch = {inputSearch}
        setInputSearch = {setInputSearch}
      />
      <TodoList>
        {
          searchedTareas.map((tarea) =>(<Todo id={tarea.text} text={tarea.text} completed={tarea.completed}/>)
            
          )
        }
      </TodoList>
    </div>
  );
}

export default App;

