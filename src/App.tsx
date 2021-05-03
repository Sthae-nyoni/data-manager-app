import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Add, Analysis, Home, Notifications, Settings } from './pages';


function App()
{

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/add'>
            <Add />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
          <Route exact path='/analysis'>
            <Analysis />
          </Route>
          <Route exact path='/notifications'>
            <Notifications />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}
export default App;
