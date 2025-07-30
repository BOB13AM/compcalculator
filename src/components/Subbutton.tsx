
interface SubbuttonProps {
  subButtonProp: () => void;
}

function Subbutton (subBtnProp:SubbuttonProps) {

  return (
    <div>
            <button onClick={subBtnProp.subButtonProp} style={{ marginRight: '100px',marginTop: '10px'}}>Subtract</button> 
    </div>
  );
}

export default Subbutton;