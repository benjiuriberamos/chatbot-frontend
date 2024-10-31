
import './MessageList.css';

function MessageList({ children }) {
    return (
        <ul className="messages">
            {children}
        </ul>
    );
}

export { MessageList };