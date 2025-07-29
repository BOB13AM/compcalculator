import Addbutton from "./Addbutton";
import Subbutton from "./Subbutton";


function Display() {
    
// This component is responsible for displaying the total value calculated by Addbutton and Subbutton components
 let total = 0;//<Addbutton.total/> or <Subbutton.total/>;
   return (
     <>
        <div style={{ marginTop: '60px', marginLeft: '120px',padding: '10px',border: '2px solid #333',borderRadius: '10px',background: '#000000ff',fontWeight: 'bold',fontSize: '2rem',textAlign: 'center',width: '80px',
    boxShadow: '0 2px 8px rgba(255, 255, 255, 1)'}}>{total}</div>
     </>
   );
 }

export default Display;

