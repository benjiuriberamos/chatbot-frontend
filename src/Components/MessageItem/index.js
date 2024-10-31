
import './MessageItem.css';

function MessageItem({ message, date, type}) {
    return (
        <li className={`message ${type}`}>
            <div className="avatar"></div>
            <div className="text_wrapper">
                <div className="text">{message}</div>
                <div className="timestamp">{date}</div>
            </div>
        </li>
    );
}

export { MessageItem };