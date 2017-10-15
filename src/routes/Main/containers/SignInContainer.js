import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setSigninnModalVisibility } from '../modules/login'

import SignIn from '../components/SignIn'

const mapDispatchToProps = {
  setSigninnModalVisibility
}

const mapStateToProps = (state) => ({
  isSigninModalOpen: state.login.isSigninModalOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
