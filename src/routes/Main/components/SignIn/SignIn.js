import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.closeSignInModal = this.closeSignInModal.bind(this)
    this.verifyUser = this.verifyUser.bind(this)
  }
  closeSignInModal = () => {
    this.props.setSigninnModalVisibility(false)
  }
  verifyUser = () => {
    // return this.props.router.push('main')
  }

  render () {
    const { isSigninModalOpen } = this.props
    // add html content here for sign in
    return (
      isSigninModalOpen &&
      <div>
        <input type='text' id='username' />username
        <input type='text' id='password' />password
        <button type='submit' onClick={this.verifyUser}>login</button>
        <button type='submit' onClick={this.closeSignInModal}>Close</button>
      </div>
    )
  }
}

SignIn.propTypes = {
  isSigninModalOpen: PropTypes.bool.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default SignIn
