import './App.css';
import JoinUs from './ButtonComponents/Joinus';
import Login from './ButtonComponents/Login';
import Search from './ButtonComponents/Search';
import Settings from './ButtonComponents/Settings';
import ContactUs from './ButtonComponents/ContactUs';
import Help from './ButtonComponents/Help';
import Home from './ButtonComponents/Home';
import Download from './ButtonComponents/Download';
import AllInOneButton from './ButtonComponents/AllInOneButton';
function App() {
  return (
    <>
    <h1>part one static</h1>
    <JoinUs className="App-header"/>
    <Settings/>
    <Login/>
    <ContactUs/>
    <Search/>
    <Help/>
    <Home/>
    <Download/>
    <h1>part two by props</h1>
   <AllInOneButton label={"JOIN US"} style="btn join_us"/>
   <AllInOneButton label={"SETTINGS"} style="btn settings"/>
   <AllInOneButton label={"LOGIN"} style="btn login"/>
   <AllInOneButton label={"CONTACT US"} style="btn contact_us"/>
   <AllInOneButton label={"SEARCH"} style="btn search"/>
   <AllInOneButton label={"HELP"} style="btn help"/>
   <AllInOneButton label={"HOME"} style="btn home"/>
   <AllInOneButton label={"DOWNLOAD"} style="btn download"/>
    </>   
  );
}

export default App;
