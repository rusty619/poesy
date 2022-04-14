import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [poems, setPoems] = useState([])
  const [isFormHidden, setIsFormHidden] = useState(false)

  function handleFormHiddenBtn(){
    setIsFormHidden(!isFormHidden)
  }

  useEffect(() => {
    (
      async () => {
        let req = await fetch('http://localhost:8004/poems')
        let res = await req.json()
        setPoems(res)
      }
    )()
  },[])

  function addNewPoem(newPoem){
    const updatedPoems = [...poems,newPoem]
    setPoems(updatedPoems)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleFormHiddenBtn} >Show/hide new poem form</button>
        {isFormHidden ? null : <NewPoemForm addNewPoem={addNewPoem}/>}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
