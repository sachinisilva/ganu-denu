import React, { Component } from 'react'
import PropTypes from 'prop-types'
export const SignUp = ({ setSigninnModalVisibility, isSignUpModalOpen, setSignupModalVisibility }) => {
  const signUpUser = () => {
    setSignupModalVisibility(false)
    setSigninnModalVisibility(true)
  }
  const closeSignUpModal = () => {
    setSignupModalVisibility(false)
  }
  // add html content here for sign up
  return (
      isSignUpModalOpen &&
      <div>
        <input type='text' id='email' />username(email)
        <input type='text' id='password' />password
        <input type='text' id='password' /> confirm password
        <button type='submit' onClick={signUpUser}>SignUp</button>
        <button type='submit' onClick={closeSignUpModal}>Close</button>
      </div>
  )
}
SignUp.propTypes = {
  setSignupModalVisibility: PropTypes.func.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired,
  isSignUpModalOpen: PropTypes.bool.isRequired
}

export default SignUp
