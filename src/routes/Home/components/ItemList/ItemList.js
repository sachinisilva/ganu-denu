import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ItemContainer from '../../containers/ItemConatiner'

class ItemList extends Component {
  componentDidMount () {
    this.props.getItems()
  }

  render () {
    const itemList = () => {
      return (
        this.props.itemList.map((element, index) =>
          <ItemContainer data={{ ...element, index }} key={`item-container-${index}`} />
        )
      )
    }

    return <div>
      <ul id='item-list-container'>
        {itemList()}
      </ul>
    </div>
  }
}

ItemList.propTypes = {
  getItems: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired
}

export default ItemList
