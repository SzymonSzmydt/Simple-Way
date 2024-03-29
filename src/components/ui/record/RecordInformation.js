import { SmallTitleWindow } from "../../windows/SmallTitleWindow";
import { useSelector } from "react-redux";

export function RecordInformation() {
  const month = useSelector((state) => state.document.defaultMonth);
  const totalMonth = useSelector((state) => state.document.totalMonth);
  const underLimit = totalMonth > 1745;

  const style = {
    backgroundColor: underLimit ? "#B07483" : "",
  };
  return (
    <SmallTitleWindow
      style={style}
      windowTitle={underLimit ? "Przekroczono limit!" : "Przydatne informacje"}
    >
      <table className='general__information-table'>
        <tbody>
          <tr className='text-list'>
            <td>Miesiąc</td>
            <th className='text__align-right'>
              {month.charAt(0).toUpperCase() + month.slice(1)}
            </th>
          </tr>
          <tr className='text-list'>
            <td>Łączna wartość</td>
            <th className='text__align-right'> {totalMonth.toFixed(2)} zł </th>
          </tr>
          <tr className='text-list'>
            <td style={{ color: underLimit ? "#B07483" : "" }}>
              {underLimit ? "Przekroczono limit!" : "Niewykorzystana kwota "}
            </td>
            <th
              className='text__align-right'
              style={{ color: underLimit ? "#B07483" : "" }}
            >
              {1745 - totalMonth.toFixed(2)} zł
            </th>
          </tr>
        </tbody>
      </table>
    </SmallTitleWindow>
  );
}
