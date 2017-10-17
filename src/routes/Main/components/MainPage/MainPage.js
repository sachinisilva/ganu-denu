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
      <div className="gen-app-header layout__row layout__align-space-between-center">
        <div className="gen-app-header-logo">
          <h1>Ganu Denu</h1>
        </div>
        <div className="gen-app-header-nav">
      <FlatButton
      label="Sign In"
      onClick={getSignInModal}/>
      <FlatButton
        label="Sign Up"
        primary={true}
        onClick={getSignUpModal}/>
      </div>
      </div>

      <ItemListContainer />
    </div>
  )
}

MainPage.propTypes = {
  setSignupModalVisibility: PropTypes.func.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default MainPage
