import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/molecules'
import { ConsumptionCalculator, Home, Counter } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/forbrugsBeregner" component={ConsumptionCalculator} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
