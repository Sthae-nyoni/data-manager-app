import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, CustomBarChart, DoughnutChart } from './components';
import { Add, AddCustomSession, Calculate, Home, Insights, Notifications, Overview, ResetSettings, Settings } from './pages';
import { defaults } from 'react-chartjs-2'

import { rows, column_names, options, users, pie_chart_data, bar_chart_data, overview_items, previous_reading, default_values, default_value_fields, default_values_form_object, report_items } from './metadata/constants/StaticData'

defaults.plugins.legend.position = 'bottom'


const charts = [
  <CustomBarChart title='Overall usage' data={bar_chart_data} />,
  <DoughnutChart title='Member usage' chart_data={pie_chart_data} />
]


function App()
{
  return (
    <Router>
      <Layout>
        <Switch>

          <Route exact path='/'>
            <Home table_data={{ columns: column_names, row_data: rows }} overview_data={overview_items} />
          </Route>

          <Route exact path='/add'>
            <Add previous_reading={previous_reading} />
          </Route>
          <Route exact path='/add/custom_session' >
            <AddCustomSession />
          </Route>

          <Route exact path='/settings'>
            <Settings values={default_value_fields} form_object={default_values_form_object} />
          </Route>
          <Route exact path='/settings/reset'>
            <ResetSettings default_values={default_values} />
          </Route>

          <Route exact path='/analysis/overview'>
            <Overview report_items={report_items} charts={charts} />
          </Route>
          <Route exact path='/analysis/insights'>
            <Insights users={users} options={options} />
          </Route>
          <Route exact path='/analysis/calculate'>
            <Calculate remaining_package={12} daily_usage_cap={1} off_budget_days={7} />
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
