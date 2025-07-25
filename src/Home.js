
import './App.css';
import { useNavigate } from 'react-router-dom';
import pfp from './pfp.png';
import './Home.css';
import { BottomToolbar } from './Toolbar.js';
import SearchModal from './SearchModal';

function Home() {

  let loginResponse;

  const navigate = useNavigate();



  return (
      <div className='Home font'>
      <div className="overlay"></div>
      <BottomToolbar></BottomToolbar>
      <SearchModal></SearchModal>
        <img src={pfp} style={{borderRadius: "99999px", 
        width:"80px", 
        marginBottom:"5px",
        boxShadow:"0px 0px 3.5px 0px rgb(0, 0, 0)"}}>

        </img>
        <label>
            Welcome, username here!
        </label>
            <div style={{flexDirection: "row", marginTop:"20px"}}>
                <div style={{flexDirection: "Column"}}>

                </div>
                <div className='Barrier'></div>
                <div style={{flexDirection: "Column"}}>

                </div>
            </div>
        </div>
  );


}

export default Home;
