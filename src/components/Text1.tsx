import { useState } from 'react';
import Text2 from './Text2';


function Text1() {
  
    const [num1, setNum1] = useState(0);
    
    const handletxt1Change = (n1:string) => {
    let numb1=Number(n1)
    setNum1(numb1);
    console.log("Text1 changed to: " + num1);
   
  }
 
  return(
    <>
    <div>
        <input type="text" onChange={(t1)=>handletxt1Change(t1.target.value)}/>
    </div>

    </>
    
  )
}


export default Text1;

