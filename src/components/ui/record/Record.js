import "./css/record.css";
import { useState } from "react";
import { Window } from "../../windows/Window";
import { RecordHeader } from "./RecordHeader";
import { RecordDocuments } from "./RecordDocuments";
import { New } from "./New";
export function Record({ setDocuments, documents }) {
  const [addProductButton, setAddProductButton] = useState(false);
  const whenAddingNewProduct = addProductButton ? (
    <New
      setAddProductButton={setAddProductButton}
      setDocuments={setDocuments}
      documents={documents}
    />
  ) : (
    <RecordHeader setAddProductButton={setAddProductButton} />
  );
  return (
    <Window>
      {whenAddingNewProduct}
      <RecordDocuments setDocuments={setDocuments} documents={documents} />
    </Window>
  );
}
