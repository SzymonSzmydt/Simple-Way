import "./css/window.css";

export function Window({ children }) {

    return (
        <div className="window">
            <div className="window-row">
                { children }
            </div>
        </div>
    )
}