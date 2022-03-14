import './index.css'
import {Component} from 'react'
import SearchItem from '../searchItem'

class InterfaceAndContent extends Component {
  state = {inputValue: ''}

  onTyping = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {inputValue} = this.state
    const {initialHistoryList} = this.props
    const searchingList = initialHistoryList.filter(items =>
      items.title.toLowerCase().includes(inputValue.toLowerCase()),
    )

    console.log(initialHistoryList)
    return (
      <div className="totalBG">
        <div className="ContentContainer">
          <div className="topContainerBlue">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="imageCss"
              alt="app logo"
            />
            <div className="inputSearchContainer">
              <img
                className="SearchPng"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                className="inputEl"
                type="search"
                placeholder="Search History"
                onChange={this.onTyping}
              />
            </div>
          </div>
          <ul className="historyItemsContainer">
            {searchingList.map(itemsList => (
              <SearchItem initialHistoryList={itemsList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default InterfaceAndContent
