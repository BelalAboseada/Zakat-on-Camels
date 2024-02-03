import { useState, useEffect } from "react";
import TableView from "./TableView";
import "./Content.css";

const ContentView = () => {
  const [total, setTotal] = useState(null);
  const [higa] = useState(2);
  const [bintlebon] = useState(4);
  const [result, setResult] = useState(null);
  const [notification, setNotification] = useState(null);

  // arrayOfTheZakat
  const arrayOfTheZakat = [
    { start: 0, end: 4 },
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
  // Calcule
const calcule = () => {
  if (total === '') {
    setNotification(null);
    setResult(null);
    return;
  }

  for (const status of arrayOfTheZakat) {
    if (total >= status.start && total <= status.end) {
      setResult(status.result);
    }
  }

  if (total > 169) {
    setResult(null);
  }

  if (total >= 0 && total <= 4) {
    setNotification("هذا العدد لا تجب فيه الزكاة.");
  } else {
    setNotification(null);
  }
};

  return (
    <div className="ContentView">
      <input
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
      {/* notification */}
      <div
        style={{
          margin: "10px 0px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          className="notification"
          style={{ display: notification ? "block" : "none" }}
        >
          {notification}
        </p>
      </div>

      <TableView
        total={total}
        higa={higa}
        bintlebon={bintlebon}
        style={{ marginTop: "10px" }}
      />
      <h3
        className="resultContent"
        style={{ display: result && total > 4 ? "block" : "none" }}
      >
        {result}
      </h3>
    </div>
  );
};

export default ContentView;
