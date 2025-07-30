import { useState } from 'react';

function Text2() {

  
    const [numb2, setNum2] = useState(0);

    const handletxt2Change = (n2:string) => {
    let numb2=Number(n2)
    //console.log("Text2 changed to: " + num2);
    setNum2(numb2);  
  }

  return{
    numb2,
    rendert2:(
    <>
    <div>
        <input type="text" onChange={(t2)=>handletxt2Change(t2.target.value)}/>
    </div>
    </>
  )}
}

export default Text2;