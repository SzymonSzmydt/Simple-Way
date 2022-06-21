import "./css/smallTitleWindow.css";

export function SmallTitleWindow( {children, windowTitle, style} ) {

    return (
        <div className="window__body">
            <div className="window__body-title" style={style}> { windowTitle } </div>
            <div className="window__body-content">
                { children }
            </div>
        </div>
    )
}