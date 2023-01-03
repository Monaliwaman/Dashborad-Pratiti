import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Import Routes
import { authProtectedRoutes } from './routes/'
import AppRoute from './routes/route'

// layouts
import VerticalLayout from './components/VerticalLayout/'
import HorizontalLayout from './components/HorizontalLayout/'

// Import scss
import './theme.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const App = () => {
  const layout = useSelector((state) => state.layout)

  const getLayout = () => {
    let layoutCls = VerticalLayout

    switch (layout?.layoutType) {
      case 'horizontal':
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return VerticalLayout
  }

  return (
    <React.Fragment>
      <Router>
        {
          <Switch>
            {authProtectedRoutes.map((route, idx) => {
              return (
                <AppRoute
                  path={route.path}
                  layout={getLayout()}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                />
              )
            })}
          </Switch>
        }
      </Router>
    </React.Fragment>
  )
}

export default App
