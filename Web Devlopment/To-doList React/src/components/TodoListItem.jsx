import React from "react";


function TodoList(props){

    const [name,setName]=React.useState(false);

    function Clicked(){
       setName((prevValue)=>{
           return !prevValue;
       })
    }



    


    return (
        <div style={{display:"flex"}}>
            <input type= "checkbox"  onClick={Clicked} />
            <li onClick={()=>
                props.onChecked(props.id)
            }  style={{textDecoration : name ? "line-through":"none" ,listStyle:"none"}} >{props.text}</li>
        </div>
    );
}
export default TodoList;