import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setSigninnModalVisibility } from '../modules/login'

import SignIn from '../components/SignIn'

const mapDispatchToProps = {
  setSigninnModalVisibility
}

const mapStateToProps = (state) => ({
  isSigninModalOpen: state.login.isSigninModalOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
