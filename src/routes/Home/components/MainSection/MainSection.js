import React from 'react'
import PropTypes from 'prop-types'
import ItemListContainer from '../../containers/ItemListContainer'

export const MainSection = () => {
  // this will be the home page after a successful login
  // item list container contain the list of items we are going
  // to display
  return <div>
    <ItemListContainer />
  </div>
}

MainSection.propTypes = {
}

export default MainSection
