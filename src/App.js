
import './App.css';
import { List } from './List';
import image from './now.jpeg';
// import Swall from 'sweetalert2';

function App() {
 return(
   <div className='app'>
    <div className='container'>
    <h1>To Do List</h1>
    </div>    
    <List />

    <div className='center'>
      <img src={ image } width="200px" alt="Do it Now" />
    </div>
    </div>
 )      
}

export default App;
