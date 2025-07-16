import { Provider } from 'react-redux';
import './App.css';
import CustomerAdd from './customerAdd';
import { store } from './store';
import CustomerView from './CustomerView';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React with Redux example</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  )
}

export default App;
