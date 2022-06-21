import "./css/bigWindowTitleInfo.css";

export function BigWindowTitleInfo({ children, infoText }) {

    return (
        <div className="bigWindow">
            <header className="bigWindow-header">
                { infoText }
            </header>
            <div className="bigWindow-container">
                { children }
            </div>
        </div>
    )
}