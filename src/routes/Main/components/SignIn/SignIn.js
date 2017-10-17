import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FlatButton, Dialog, RaisedButton, TextField} from 'material-ui'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.closeSignInModal = this.closeSignInModal.bind(this)
    this.verifyUser = this.verifyUser.bind(this)
  }

  closeSignInModal = () => {
    this.props.setSigninnModalVisibility(false)
  }
  verifyUser = () => {
    return this.props.router.push('home')
  }

  render() {
    const {isSigninModalOpen} = this.props;
    const customContentStyle = {
      width: '400px',
      padding: '0px'
    }
    // add html content here for sign in
    return (
      isSigninModalOpen &&
      <Dialog
        modal={false}
        open={isSigninModalOpen}
        onRequestClose={this.closeSignInModal}
        contentStyle={customContentStyle}
      >
        <div className="layout__column layout__align-start-center gen-sign-in-container">
          <div className="layout__column layout__align-start-center">
            <h3>Welcome</h3>
            <p>Sign in below to see <br/> all your amazing stats!</p>
            <TextField
              hintText="Username"
              floatingLabelText="Username"
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
            />
            <RaisedButton type='submit' onClick={this.verifyUser} primary={true}
                          className="gen-sign-in-btn">login</RaisedButton>
          </div>
          <div className="layout__row layout__align-space-between-center gen-sign-in-base">
            <p>Don't have an account?</p>
            <FlatButton label="Sign up now"/>
          </div>
        </div>
      </Dialog>
    )
  }
}

SignIn.propTypes = {
  isSigninModalOpen: PropTypes.bool.isRequired,
  router: React.PropTypes.object,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default SignIn
