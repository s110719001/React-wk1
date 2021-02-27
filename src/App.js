import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="background" src="./img/81813340_912491682481615_412210852033200128_n.png"/>
      <div className="body">
        <div >
          <img src="./img/logo 1.png" id="logow" className="logopic"/>
        </div>
    
        <div className="coverflow">
          
          <a href="#"><img src="./img/ADIDAS1.jpg" /></a>
          <a href="#"><img src="./img/NEWBALANCE.jpg"/></a>
          <a href="#"><img src="./img/puma1.jpg"/></a>
          <a href="#"><img src="./img/REEBOK.jpg"/></a>
          <a href="#"><img src="./img/nike.jpg"/></a>
        </div>
        <div className="button" onclick="window.location='./1.html'">
          <img src="./img/Repeat Grid 2@2x.png"  id="entrybt" type="button"/>
          <img src="./imgRepeat Grid 2.png" id="entrybt1"type="button"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
