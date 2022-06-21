import "./css/bigButton.css";

export function BigButton({ type, name, onClick }) {

    return <button type={type} onClick={onClick} className="bigButton"> { name } </button>
}