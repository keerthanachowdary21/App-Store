// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemsInfo} = props
  const {appName, imageUrl} = appItemsInfo

  return (
    <li className="list-apps">
      <div>
        <img src={imageUrl} alt={appName} className="apps" />
        <p className="app-heading">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
