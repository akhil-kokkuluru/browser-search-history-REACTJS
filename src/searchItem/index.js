import './index.css'

const SearchItem = props => {
  const {initialHistoryList, onDeleteClick} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = initialHistoryList
  const Onclicking = () => {
    onDeleteClick(id)
  }
  return (
    <li className="listItems">
      <div className="timeCont">
        <p className="timecss">{timeAccessed}</p>
      </div>

      <div className="allComponents">
        <div className="logoWebsiteurlContainer">
          <img src={logoUrl} alt="domain logo" className="logoCss" />
          <div className="nameandWebsiteContainer">
            <p className="titlecss">{title}</p>
            <p className="urlcss">{domainUrl}</p>
          </div>
        </div>
        <button className="buttons" type="button" onClick={Onclicking}>
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
