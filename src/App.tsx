//import { useState } from 'react'
import './App.css'
import Text1 from './components/Text1'
import Text2 from './components/Text2'
import Subbutton from './components/Subbutton'
import Addbutton from './components/Addbutton'
import Display from './components/Display'
import { useState } from 'react';

const t1 = () => Text1();
const t2 = () => Text2();

function App() {

  const [total, setTotal] = useState(0);
  const {rendert1, numb1} = t1();
  const {rendert2, numb2} = t2();

      const handleSubtract = () => {
       setTotal(numb1 - numb2);
       //console.log("Subtraction result: " + total);
    }
     const handleAdd = () => {
       setTotal(numb1 + numb2);
       //console.log("Addition result: " + total);
  }


  return (

   <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '40px'
    }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {rendert1}
        {rendert2}
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Subbutton subButtonProp={handleSubtract} />
        <Addbutton addButtonProp={handleAdd} />
      </div>
      <Display total={total}/>
    </div>
  )
}

export default App
