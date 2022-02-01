import logo from './logo.svg';
import './App.css';

function App() {
  const menu = (<div>
    <ul id="nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Contact TEST</a></li>
      <li><a href="#">Contact TEST</a></li>


    </ul>
  </div>
  );

  const menu2 = [<li>un</li>, <li>deux</li>, <li>trois</li>];
  return (

    <div>
      {menu}
      <div>
        [Page content here]
      </div>
    </div>
  );
}

export default App;
