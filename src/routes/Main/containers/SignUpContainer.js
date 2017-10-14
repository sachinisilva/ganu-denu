import { connect } from 'react-redux'
import { setSignupModalVisibility, setSigninnModalVisibility } from '../modules/login'

import SignUp from '../components/SignUp'

const mapDispatchToProps = {
  setSignupModalVisibility,
  setSigninnModalVisibility
}

const mapStateToProps = (state) => ({
  isSignUpModalOpen: state.login.isSignUpModalOpen
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
