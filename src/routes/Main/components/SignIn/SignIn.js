import React, { Component } from 'react'
import PropTypes from 'prop-types'
export const SignIn = ({ setSigninnModalVisibility, router, isSigninModalOpen }) => {
  const closeSignInModal = () => {
    setSigninnModalVisibility(false)
  }
  const verifyUser = () => {
    return router.push('home')
  }

  // add html content here for sign in
  return (
    isSigninModalOpen &&
    <div>
      <input type='text' id='username' />username
      <input type='text' id='password' />password
      <button type='submit' onClick={verifyUser}>login</button>
      <button type='submit' onClick={closeSignInModal}>Close</button>
    </div>
  )
}
SignIn.propTypes = {
  router: React.PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  isSigninModalOpen: PropTypes.bool.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default SignIn
