import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Main = require('./components/Main').default
      const userReducer = require('./modules/user').default
      const loginReducer = require('./modules/login').default
      const itemListReducer = require('../Home/modules/itemList').default

      /*  Add the reducer to the store on key 'user'  */
      injectReducer(store, { key: 'user', reducer: userReducer })
      injectReducer(store, { key: 'login', reducer: loginReducer })
      injectReducer(store, { key: 'itemList', reducer: itemListReducer })

      /*  Return getComponent   */
      cb(null, Main)

      /* Webpack named bundle   */
    }, 'main')
  }
})
