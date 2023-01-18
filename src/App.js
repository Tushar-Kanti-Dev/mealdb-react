import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Meal from './components/Meals/Meal';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Meal></Meal>
    </div>
  );
}

export default App;
