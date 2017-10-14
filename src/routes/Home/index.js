import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Homepage = require('./components/Homepage').default
      /*  Return getComponent   */
      cb(null, Homepage)

      /* Webpack named bundle   */
    }, 'home')
  }
})
