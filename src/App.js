import React,{useState} from 'react'
import Sidebar from './components/SideBar/Sidebar.jsx';
import Main from './components/Main/Main.jsx';
import LoginPage from './components/Login/login.jsx';
const App=()=>{
  const[user,setUser] = useState(null);
  return(<>
  {user ? (<>
    <Sidebar/>
        <Main onLogout={() => setUser(null)} /></>
      ) : (
        
        <LoginPage onLogin={setUser} />
      )}



  
  </>)
}
export default App;