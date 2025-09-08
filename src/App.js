import { Provider } from 'react-redux'
import './App.css'
import CustomerAdd from './customerAdd'
import { store } from './store'
import CustomerView from './CustomerView'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="app-header">
          <div className="container">
            <h1 className="app-title">Customer Manager</h1>
            <p className="app-subtitle">
              Simple Redux example with add & delete
            </p>
          </div>
        </header>
        <main className="container">
          <section className="card">
            <CustomerAdd />
          </section>
          <section className="card">
            <CustomerView />
          </section>
        </main>
      </div>
    </Provider>
  )
}

export default App
