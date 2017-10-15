import React from 'react'
import PropTypes from 'prop-types'
import ItemListContainer from '../../../Home/containers/ItemListContainer'
import {FlatButton} from 'material-ui'

export const MainPage = ({ setSigninnModalVisibility, setSignupModalVisibility }) => {
  const getSignInModal = () => {
    setSignupModalVisibility(false)
    setSigninnModalVisibility(true)
  }

  const getSignUpModal = () => {
    setSigninnModalVisibility(false)
    setSignupModalVisibility(true)
  }

  // add html content here for sign in
  return (
    <div>
      <FlatButton
      label="Sign In"
      primary={true}
      onClick={getSignInModal}/>
      <FlatButton
        label="Sign Up"
        primary={true}
        onClick={getSignUpModal}/>
      <ItemListContainer />
    </div>
  )
}

MainPage.propTypes = {
  setSignupModalVisibility: PropTypes.func.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default MainPage
