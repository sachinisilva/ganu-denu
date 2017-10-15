import React from 'react'

import MainPageContainer from '../../containers/MainPageContainer'
import SignInContainer from '../../containers/SignInContainer'
import SignUpContainer from '../../containers/SignUpContainer'

export const MainSection = () => {
  return <div>
    <MainPageContainer />
    <SignInContainer />
    <SignUpContainer />
  </div>
}

export default MainSection
