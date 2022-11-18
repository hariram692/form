import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
      <form>
        <label>
            Name:
       <input type="text" name="name" />
      </label>
      <br></br>
      <label>
            password:
       <input type="text" name="name" />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
      </form>
      </center>
    </div>
  );
}

export default App;
