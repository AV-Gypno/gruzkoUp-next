import Popup from "reactjs-popup";
import PopupContent from "@/components/Popup/Popup";
import './MainButton.scss'

function MainButton() {
  return (
    <Popup
      trigger={<button className="mainButton1 green-button button">Заказать звонок</button>}
      position="center center"
      modal overlayStyle={{
      background: 'rgba(0, 50, 0, 0.8)',
      zIndex: 999
    }}
    >
      <PopupContent/>
    </Popup>
  )
}

export default MainButton;
