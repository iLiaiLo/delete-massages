import React from 'react'
import box from './box'

function App() {
  const [massages,setMassages]=React.useState(box);
  const [text,setText]=React.useState("Select all items")
  function handleCheck(key){
    setMassages(massages.map(it=>{
      if(it.key===key){
        it.checked=!it.checked;
      }
      return it
      
    }))
  }
  function handleDelete(){
    setMassages(prewmassages=>prewmassages.filter(item=>!item.checked))
  }

  function chooseAll(){
    setMassages(massages.map(item=>{
      if(!item.checked){
        setText("Unselect all items")
      }
      else{
        setText("Select all items")
      }
      return {...item,checked:!item.checked}
    }))
  }

  return (
    <div className="hi">
        <button onClick={chooseAll}>{text}</button>
        <div className="massageContainer">
          {massages.map(item=>{
            return(<div key={item.key} style={{display:"flex",alignItems:"center"}}>
              <input onChange={()=>handleCheck(item.key)} type="checkbox" style={{width:"30px",height:"30px"}} checked={item.checked}/>
              <div>
              {item.massage}
              </div>
              </div>)
          })}
        
        </div>
        <button classname="delete" onClick={handleDelete}>Delete</button>
      </div>

  );
}

export default App;
