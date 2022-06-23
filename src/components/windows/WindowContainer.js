import "./css/windowContainer.css";

export function WindowContainer({ children }) {

    return (
        <div className="window-container">
            {children}
        </div>
    )
}