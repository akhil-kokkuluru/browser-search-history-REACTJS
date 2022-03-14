import './index.css'

const SearchItem = props => {
  const {initialHistoryList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList
  return (
    <li className="listItems">
      <p className="timecss">{timeAccessed}</p>
      <div className="allComponents">
        <div className="logoWebsiteurlContainer">
          <img src={logoUrl} alt="domain logo" className="logoCss" />
          <div className="nameandWebsiteContainer">
            <p className="titlecss">{title}</p>
            <p className="urlcss">{domainUrl}</p>
          </div>
        </div>
        <button className="buttons" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="deletecss"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
