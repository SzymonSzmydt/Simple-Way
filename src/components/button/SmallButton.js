import "./css/smalButton.css";

export function SmallButton({ name, onClick }) {

    return <button onClick={onClick} className="smallButton"> { name } </button>
}