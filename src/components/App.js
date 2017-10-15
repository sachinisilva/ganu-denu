import React from 'react'
import {browserHistory, Router} from 'react-router'
import {Provider} from 'react-redux'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          <div style={{height: '100%'}}>
            <Router history={browserHistory} children={this.props.routes}/>
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
