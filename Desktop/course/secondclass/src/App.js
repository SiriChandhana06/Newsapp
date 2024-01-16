
import './App.css';
import Header from './Header';
import Products from './Products';

function App() {
  function dosomething(data){
    console.log("hello I am Click",data)
  }
  return (
    <div className="App">
    <Header></Header>
    <Products/>
   
    {/*if function dont have parameters call like this*/}
    <button className="btn" onClick={dosomething}>Click</button>
    {/*if function have parameters call likethis*/}
    <button className="btn" onClick={()=>{dosomething("saurabh")}}>Click</button>
    {/*event object info about whole event */}
    <button className="btn" onClick={(event)=>{console.log(event) 
      dosomething("Siri")}}>Click</button>
    </div>
  );
}

export default App;

