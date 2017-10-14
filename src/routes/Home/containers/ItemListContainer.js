import { connect } from 'react-redux'
import { getItems } from '../modules/itemList'

import ItemList from '../components/ItemList'

const mapDispatchToProps = {
  getItems
}

const mapStateToProps = (state) => ({
  itemList: state.itemList
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
