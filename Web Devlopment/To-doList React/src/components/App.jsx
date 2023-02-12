import React,{useState} from "react";
import TodoList from "./TodoListItem";

function App() {


  const [name,setName]=useState("")
  const [buttonname,setButton]=useState([])

  function handleChange(event){
    const value=event.target.value;
    setName(value);

  }
  function eventClicked(){
    setButton(prevItem=>{
      return [...prevItem,name];
    });
    setName("");
  }

  function deleteItem(id){
    setButton(prevItem=>{
      return  prevItem.filter(function(item,index){
        return index!==id;  
      })
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={name}/>
        <button onClick={eventClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {buttonname.map((x,index)=>
          <TodoList 
            key={index}
            id={index}
            text={x} 
            onChecked={deleteItem}

          />
        )}
        </ul>
      </div>
    </div>
  );
}

export default App;
