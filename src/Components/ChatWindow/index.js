
import './ChatWindow.css';

function ChatWindow({ children }) {
    return (
        <div className="ChatWindow">
            {children}
        </div>
    );
}

export { ChatWindow };