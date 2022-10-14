
import './App.css';
import NavBar from './components.js/navbar';
import Section1 from './components.js/section1'
import Section2 from './components.js/section2'


function App() {
  return (
   <>
   <NavBar/>  
   <div className="container">
   <Section1/>
   </div>
   <Section2/>
  
   </>
  );
}

export default App;
