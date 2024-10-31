import './ChatButton.css';
import { ReactComponent as ChatSVG } from './chat.svg';

function ChatButton({ setActiveChat }) {
    return (
        <button
            className='ChatButton'
            onClick={() => (setActiveChat(state => !state))}
        >
            <ChatSVG className="Icon-svg" width="50px" height="50px"/>
        </button>
    );
}

export { ChatButton };