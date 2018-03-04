import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const Statistiikka = () => {
	
  const palautteita = store.getState().good + store.getState().ok + store.getState().bad
  const positiivisia = store.getState().good / palautteita * 100
  if (palautteita === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState().good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().bad}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{positiivisia} %</td>
          </tr>
        </tbody>
      </table>

      <button onClick={e => store.dispatch({ type: 'ZERO'})}>
          nollaa
        </button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
	//console.log(nappi)
	store.dispatch({ type: nappi})
  }

  render() {
	console.log(store.getState())
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'))
  }
  
  renderApp()
  store.subscribe(renderApp)

