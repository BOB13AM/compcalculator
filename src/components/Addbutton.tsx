
interface AddbuttonProps {
  addButtonProp: () => void;
}

function Addbutton(addBtnprop:AddbuttonProps) {
   
  return (
    <div>
            <button onClick={addBtnprop.addButtonProp} style={{ marginTop: '10px' }}>Add</button> 
   </div>
  );
}

export default Addbutton;