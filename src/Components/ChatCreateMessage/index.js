
import { ReactComponent as SendSVG } from './send.svg';
import './ChatCreateMessage.css';

function ChatCreateMessage() {
    return (
        <div className="bottom_wrapper">
          <input id="msg_input" placeholder="Say Hi to begin chat..." />
          <div id="send_button" className="app_button_1"><SendSVG className="Icon-svg" width="20px" height="20px"/>
          </div>
        </div>
    );
}

export { ChatCreateMessage };