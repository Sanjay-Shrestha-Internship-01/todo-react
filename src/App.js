import logo from './logo.svg';

import './styles/main.scss';
import Header from './Component/Header';
import Bodymain from './Component/Bodymain';
function App() {
  return (
    <div className="App">
      <div className="todo-box">
      <Header />
      <div class="todo-body">
      <Bodymain />
      </div>
    </div>
    </div>
  );
}

export default App;
