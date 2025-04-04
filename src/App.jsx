import './App.css';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* container game */}
        <div
          style={{ width: '350px', height: '500px', border: '2px black solid', borderRadius: '5px 5px 35px 5px', backgroundColor: 'white' }}
        >
          {/* container screen */}
          <div
            style={{
              paddingTop: '5%',
              paddingBottom: '25%',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <div
              style={{
                width: '85%',
                height: '200px',
                backgroundColor: 'olive',
              }}
            ></div>
          </div>

          {/* container buttons */}
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{width: "60px", height:"60px", backgroundColor:"black"}}>
              <div>
                <button style = {{backgroundColor: 'blue', width: '40px', height: '40px'}}></button>
              </div>
              <div></div>
            </div>
            <div style={{paddingTop: "30%"}} >
              <div style={{width: "60px", height:"60px", alignContent:'center', backgroundColor:"gray"}}> 
                <div style = {{backgroundColor: 'black', width: '40px', height: '20px', borderRadius: '50%'}}> </div>
                <div style = {{backgroundColor: 'black', width: '40px', height: '20px', borderRadius: '50%'}}></div>
              
              </div>
            </div>
            <div style={{width: "60px", height:"60px", display: 'flex', backgroundColor:"black"}}>
              <div style = {{backgroundColor: '#821660', width: '40px', height: '40px', borderRadius: '50%'}}></div>
              <div style = {{backgroundColor: '#821660', width: '40px', height: '40px', borderRadius: '50%'}}></div>
            </div>
    
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
