import { useState, useEffect, useRef } from "react";
import TableView from "./TableView";
import "./Content.css";

const ContentView = () => {
  const [total, setTotal] = useState(null);
  const [higa] = useState(2);
  const [bintlebon] = useState(4);
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  // arrayOfTheZakat
  const arrayOfTheZakat = [
    { start: 0, end: 4, result :"هذا العدد لا تجب فيه الزكاة."},
    { start: 5, end: 9, result: "شاة واحدة" },
    { start: 10, end: 14, result: "شاتان" },
    { start: 15, end: 19, result: "ثلاثة شياه" },
    { start: 20, end: 24, result: "4 شياه" },
    { start: 25, end: 35, result: "بنت مخاض" },
    { start: 36, end: 45, result: "بنت لَبُون" },
    { start: 46, end: 60, result: "حِقَّة" },
    { start: 61, end: 75, result: "جدعة" },
    { start: 76, end: 90, result: "بنتا البون (2 بنت لبون)" },
    { start: 91, end: 120, result: "حِقتان (2 حقة)" },
    { start: 121, end: 129, result: "3 بنات البون" },
    {
      start: 130,
      end: 139,
      result: "حقة وبنتا لبون (1 حقة و 2 بنتات لبون)",
    },
    {
      start: 140,
      end: 149,
      result: "حقتان وبنت لبون (2 حقة و 1 بنت لبون)",
    },
    { start: 150, end: 159, result: "3 حقاق" },
    { start: 160, end: 169, result: "4 بنات لبون" },
  ];

  useEffect(() => {
    calcule();
  }, [total]);

  // Calcule
  const calcule = () => {
    arrayOfTheZakat.forEach((status) => {
      if (total >= status.start && total <= status.end)
        setResult(status.result);
    });

    if (total > 169) {
      setResult(null);
    }
  };
  // auto focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="ContentView">
      <input
        ref={inputRef}
        className="myInput"
        type="number"
        placeholder="أكتب هنا عدد الرؤوس ..."
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      {/* button calcule */}
      <button id="calcule" onClick={calcule}>
        حساب
      </button>

      <TableView
        total={total}
        higa={higa}
        bintlebon={bintlebon}
        style={{ marginTop: "10px" }}
      />
      <h3
        className="resultContent"
        style={{
          display: result && total > 0 ? "block" : "none",
          color: result === "هذا العدد لا تجب فيه الزكاة." ? "#D71313" : "var(--main)",
          borderColor: result === "هذا العدد لا تجب فيه الزكاة." ? "#D71313" : "var(--main)",
        }}
      >
        {result}
      </h3>
    </div>
  );
};

export default ContentView;
