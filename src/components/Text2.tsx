import { useState } from 'react';
import Text1 from './Text1';


function Text2() {
    const [num2, setNum2] = useState(0);
    const handletxt2Change = (n2:string) => {
    let numb2=Number(n2)
    //console.log("Text2 changed to: " + num2);
    setNum2(numb2);
    console.log("Text2 changed to: " + num2);
  }
  return(
    <>
    <div>
        <input type="text" onChange={(t2)=>handletxt2Change(t2.target.value)}/>
    </div>
    </>
  )
}

export default Text2;