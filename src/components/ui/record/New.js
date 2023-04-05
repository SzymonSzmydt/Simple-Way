import "./css/new.css";
import { SmallTitleWindow } from "../../windows/SmallTitleWindow";
import { useState, useCallback } from "react";
import { SmallButton } from "../../button/SmallButton";
import { WindowContainer } from "../../windows/WindowContainer";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../context/firebase";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useSelector } from "react-redux";

const year = new Date().getFullYear().toLocaleString();

export function New({ setAddProductButton, setDocuments, documents }) {
  const { user } = useUserAuth();
  const monthsText = useSelector((state) => state.document.month);
  const [products, setProducts] = useState({ date: "", sum: 0 });
  const monthDigit =
    products.date.charAt(5) === "0"
      ? products.date.slice(6, 7)
      : products.date.slice(5, 7);
  const selectedMonth = monthsText[+monthDigit - 1];

  const handleChange = (e) => {
    e.preventDefault();
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };
  const [isValid, setIsValid] = useState(true);
  const style = {
    backgroundColor: !isValid ? "#B07483" : "",
    color: !isValid ? "white" : "",
  };

  const dayBefore = products.date.slice(-2);
  const dayAfter = dayBefore.charAt(0) === "0" ? dayBefore.slice(1) : dayBefore;

  const saveDataToFirestore = useCallback(async () => {
    if (products.date.length === 10 && products.sum > 0) {
      const copy = structuredClone(documents);
      copy[0][selectedMonth] = {
        ...copy[0][selectedMonth],
        [dayAfter]: products,
      };
      setIsValid(true);
      try {
        const docRef = doc(db, user.email, year);
        setDoc(
          docRef,
          { [selectedMonth]: { [dayAfter]: products } },
          { merge: true }
        );
        setDocuments(copy);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else return setIsValid(false);
    setAddProductButton(false);
  }, [products, setAddProductButton, documents, selectedMonth, dayAfter, user.email, setDocuments]);

  return (
    <WindowContainer>
      <SmallTitleWindow
        style={style}
        windowTitle={
          isValid
            ? "Nowy wpis rejestru sprzedaży"
            : "Pola niekompletne lub mają nieprawdłowe wartości"
        }
      >
        <div className='box'>
          <form className='new'>
            <label className='new__label'>
              Data
              <input
                type='date'
                name='date'
                onChange={(event) => handleChange(event)}
              />
            </label>
            <label className='new__label'>
              Kwota sprzedaży
              <input
                type='number'
                name='sum'
                onChange={(event) => handleChange(event)}
              />
            </label>
          </form>
          <div className='bottom-margin'>
            <SmallButton name={"Zapisz"} onClick={saveDataToFirestore} />
            <SmallButton
              name={"Anuluj"}
              onClick={() => setAddProductButton(false)}
            />
          </div>
        </div>
      </SmallTitleWindow>
    </WindowContainer>
  );
}
