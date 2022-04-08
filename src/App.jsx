import logo from './logo.svg';
import './App.css';

function App() {
  var links=["services","projects","about"]
  return (
    <div>
      <div id="nav">
        <div id="logo">
          <img
            width="205px"
            height="45px"
            src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"
            alt=""
          />
        </div>
        <div id="link">
          {links.map((e) => {
            return <Link data={e} />;
          })}
        </div>
        <div id="button">
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
}
function Link(props){
  console.log("props:",props)
  return <div>{props.data}</div>
}

export default App;
