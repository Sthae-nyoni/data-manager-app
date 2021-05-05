import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Add, AddCustomSession, Calculate, Home, Insights, Notifications, Overview, ResetSettings, Settings } from './pages';
import { defaults } from 'react-chartjs-2'

defaults.plugins.legend.position = 'bottom'


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

          <Route exact path='/analysis/overview'>
            <Overview />
          </Route>
          <Route exact path='/analysis/insights'>
            <Insights />
          </Route>
          <Route exact path='/analysis/calculate'>
            <Calculate />
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
