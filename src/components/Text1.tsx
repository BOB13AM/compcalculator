import { useState } from 'react';


function Text1() {
  
    const [num1, setNum1] = useState(0);
    
    const handletxt1Change = (n1:string) => {
    let numb1=Number(n1)
    setNum1(numb1);
    console.log("Text1 changed to: " + num1);
   
  }
 
  return(
    <>
// I need to pass the value of num1 to Subbutton and Addbutton component
    <div>
        <input type="text" onChange={(t1)=>handletxt1Change(t1.target.value)}/>
    </div>

    </>
    
  )
}


export default Text1;

