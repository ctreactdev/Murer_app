import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodoList, Home } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/todolist" component={TodoList} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
