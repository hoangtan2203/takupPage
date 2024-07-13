import './App.css';
import { BrowserRouter} from "react-router-dom";
import RouterUser from "./router/Router"
import "./accessts/style/index.scss"


function App() {
  return (
    <BrowserRouter>
      <RouterUser/>
      <a href='#' className='go-top'>
      <p>^</p>
      </a>
    </BrowserRouter>
  );
}

export default App;
