import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

const App = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const openSidebar = () => {
    setSideBarOpen(true)
  }

  const closeSidebar = () => {
    setSideBarOpen(false)
  }
  
  return (
    <div className="container">
      <Navbar openSidebar={openSidebar}/>
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
