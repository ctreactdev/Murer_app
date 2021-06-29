import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/molecules'
import { TodoList, Home, Counter } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/todolist" component={TodoList} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
