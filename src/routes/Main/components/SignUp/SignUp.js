import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FlatButton, Dialog, RaisedButton, TextField} from 'material-ui'

export const SignUp = ({ setSigninnModalVisibility, isSignUpModalOpen, setSignupModalVisibility }) => {
  const signUpUser = () => {
    setSignupModalVisibility(false)
    setSigninnModalVisibility(true)
  }
  const closeSignUpModal = () => {
    setSignupModalVisibility(false)
  }
  const customContentStyle = {
    width: '400px',
    padding: '0px'
  }
  // add html content here for sign up
  return (
    <Dialog
      modal={false}
      open={isSignUpModalOpen}
      onRequestClose={closeSignUpModal}
      contentStyle={customContentStyle}
    >
      <div className="layout__column layout__align-start-center gen-sign-in-container">
        <div className="layout__column layout__align-start-center">
          <h3>Welcome</h3>
          <p>the best move<br/>you have ever made in your life!</p>
          <TextField
            hintText="Username"
            floatingLabelText="Username"
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
          />
          <TextField
            hintText="confirm Password"
            floatingLabelText="Confirm password"
          />
          <RaisedButton type='submit' onClick={signUpUser} primary={true}
                        className="gen-sign-in-btn">Sign up</RaisedButton>
        </div>
        <div className="layout__row layout__align-space-between-center gen-sign-in-base">
          <p>Already have an account?</p>
          <FlatButton label="Sign in"/>
        </div>
      </div>
    </Dialog>
  )
}
SignUp.propTypes = {
  setSignupModalVisibility: PropTypes.func.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired,
  isSignUpModalOpen: PropTypes.bool.isRequired
}

export default SignUp
