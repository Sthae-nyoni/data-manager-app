import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Add, AddCustomSession, Analysis, Home, Notifications, ResetSettings, Settings } from './pages';


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
          <Route exact path='/add/custom_session' >
            <AddCustomSession />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
          <Route exact path='/settings/reset'>
            <ResetSettings />
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
