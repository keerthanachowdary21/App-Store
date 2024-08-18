// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemInfo, isActive, clicktabitems} = props
  const {tabId, displayText} = tabItemInfo

  const onClickTab = () => {
    clicktabitems(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`btn ${activeTabBtnClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
