import { connect } from 'react-redux'
import { setSignupModalVisibility, setSigninnModalVisibility } from '../modules/login'

import MainPage from '../components/MainPage'

const mapDispatchToProps = {
  setSignupModalVisibility,
  setSigninnModalVisibility
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
