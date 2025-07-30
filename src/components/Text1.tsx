import { useState } from 'react';


function Text1() {
    
  const [numb1, setNum1] = useState(0);

  const handletxt1Change = (n1: string) => {
    let numb1 = Number(n1);
    //console.log("Text1 changed to: " + numb1);
    setNum1(numb1);
  }

  return{
    
    numb1,
     
    rendert1:(
    <>
    <div>
        <input type="text" onChange={(t1)=>handletxt1Change(t1.target.value)}/>
    </div>
    </>
  )}
}

export default Text1;

