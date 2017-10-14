import React from 'react'
import PropTypes from 'prop-types'
import ItemListContainer from '../../../Home/containers/ItemListContainer'
export const MainPage = ({ setSigninnModalVisibility, setSignupModalVisibility }) => {
  const getSignInModal = () => {
    return setSigninnModalVisibility(true)
  }

  const getSignUpModal = () => {
    return setSignupModalVisibility(true)
  }

  // add html content here for sign in
  return (
    <div>
      <a href='#' onClick={getSignInModal}>SignIn</a>
      <a href='#' onClick={getSignUpModal}>SignUp</a>
      <ItemListContainer />
    </div>
  )
}

MainPage.propTypes = {
  setSignupModalVisibility: PropTypes.func.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default MainPage
