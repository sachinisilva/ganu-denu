import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  render () {
    const { item } = this.props.data

    return (
      <li id={`item-${item.id}`}>
        <span>{item.name}</span>
      </li>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired
}

export default Item
