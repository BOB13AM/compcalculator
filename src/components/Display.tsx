

interface DisplayProps {
  total: number;  
}

function Display(displayProps: DisplayProps) {
   return (
     <>
        <div style={{ marginTop: '60px', marginLeft: '10px',padding: '10px',border: '2px solid #333',borderRadius: '10px',background: '#000000ff',fontWeight: 'bold',fontSize: '2rem',textAlign: 'center',width: '80px',
    boxShadow: '0 2px 8px rgba(255, 255, 255, 1)'}}>{displayProps.total}</div>
     </>
   );
 }

export default Display;

