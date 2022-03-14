import './index.css'
import {Component} from 'react'
import SearchItem from '../searchItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class InterfaceAndContent extends Component {
  state = {inputValue: '', HistoryList: initialHistoryList}

  onTyping = event => {
    this.setState({inputValue: event.target.value})
  }

  onDeleteClick = valueD => {
    const {HistoryList} = this.state
    const ModifiedList = HistoryList.filter(oitems => oitems.id !== valueD)
    this.setState({HistoryList: ModifiedList})
  }

  render() {
    const {HistoryList, inputValue} = this.state

    let element1
    let classComponener
    const newHistory = HistoryList.filter(items =>
      items.title.toLowerCase().includes(inputValue.toLowerCase()),
    )
    if (newHistory.length === 0 || HistoryList.length === 0) {
      element1 = <p className="nohistory">There is no history to show</p>
      classComponener = 'historyItemsContainer2'
    } else {
      classComponener = 'historyItemsContainer'
    }

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
          <ul className={classComponener}>
            {element1}
            {newHistory.map(itemsList => (
              <SearchItem
                initialHistoryList={itemsList}
                onDeleteClick={this.onDeleteClick}
                key={itemsList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default InterfaceAndContent
