import './index.css'
import {Component} from 'react'
import SearchItem from '../searchItem'

class InterfaceAndContent extends Component {
  render() {
    const {initialHistoryList} = this.props
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
              />
            </div>
          </div>
          <ul className="historyItemsContainer">
            <SearchItem initialHistoryList={initialHistoryList[0]} />
          </ul>
        </div>
      </div>
    )
  }
}

export default InterfaceAndContent
