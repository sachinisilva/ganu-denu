import React from 'react'
import PropTypes from 'prop-types'
import ItemListContainer from '../../../Home/containers/ItemListContainer'
import {FlatButton} from 'material-ui'
import banner from '../../../../../public/banner.jpg'

export const MainPage = ({setSigninnModalVisibility, setSignupModalVisibility}) => {
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
      <div className="gen-banner">
        <img src={banner}/>
        <div className="overlay layout__column layout__align-center-center">
          <div className="layout__column layout__align-center-end">
            <h1>Ganu Denu</h1>
            <p>Launching soon...</p>
          </div>
        </div>
      </div>
      {/*<ItemListContainer />*/}
    </div>
  )
}

MainPage.propTypes = {
  setSignupModalVisibility: PropTypes.func.isRequired,
  setSigninnModalVisibility: PropTypes.func.isRequired
}

export default MainPage
