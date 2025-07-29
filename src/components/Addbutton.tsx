import { useState } from "react";
import Text1 from "./Text1";
import Text2 from "./Text2";


function Addbutton(){
    const [total, setTotal] = useState(0);
    const handleAdd = () => {
// i need to pass the value of num1 and num2 from Text1 and Text2 components
    setTotal(total = <Text1.num1/>+<Text2.num2/>);
  }
  return (
    <div>
            //return the value of total to display component
            <button onClick={handleAdd} style={{ marginTop: '10px' }}>Add</button> 
   </div>
  );
}

export default Addbutton;