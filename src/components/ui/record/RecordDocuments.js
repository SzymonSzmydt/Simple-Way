import "./css/recordDokuments.css";
import { WindowContainer } from "../../windows/WindowContainer";
import { DocumentsLists } from "./DocumentsLists";
import { useEffect } from "react";
import { totalMonth } from "../../../redux/documentsSlice";
import { useSelector, useDispatch } from "react-redux";

export const RecordDocuments = ({ setDocuments, documents }) => {
  const dispatch = useDispatch();
  const keys = useSelector((state) => state.document.keys);
  const choiceMonth = useSelector((state) => state.document.defaultMonth);

  const documentsValues =
    documents.length > 0 && documents[0][choiceMonth]
      ? Object.values(documents[0][choiceMonth])
      : false;

  const isMonthInDocuments =
    documents.length > 0 && choiceMonth ? keys.includes(choiceMonth) : false;
  let total = 0;

  const data = documentsValues
    ? documentsValues.map(({ date, sum }, index) => (
        <DocumentsLists
          key={date}
          date={date}
          sum={parseFloat(sum).toFixed(2)}
          total={(total += parseFloat(sum))}
          index={index}
          choiceMonth={choiceMonth}
          setDocuments={setDocuments}
          documents={documents}
        />
      ))
    : null;
  const sumOfMonth =
    isMonthInDocuments && documentsValues
      ? documentsValues.reduce((a, b) => parseFloat(a) + parseFloat(b.sum), 0)
      : 0;

  useEffect(() => {
    dispatch(totalMonth(sumOfMonth));
  }, [dispatch, sumOfMonth]);

  return (
    <WindowContainer>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <td className='col col-lp'> Lp. </td>
            <td className='col col-data'> Data </td>
            <td className='col col-summary'> Kwota sprzedaży</td>
            <td className='col col-total'> Kwota rosnąco </td>
            <td className='col col-options'> Opcje </td>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data
          ) : (
            <tr>
              <td colSpan='6'> {null} </td>
            </tr>
          )}
        </tbody>
      </table>
    </WindowContainer>
  );
};
