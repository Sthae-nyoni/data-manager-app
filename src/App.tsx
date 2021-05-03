import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App()
{
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route exact path='/products/:id'>
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
