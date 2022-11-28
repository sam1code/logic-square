import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard, TopNav } from "./componrnts";
import { employees } from "./data";

function App() {
  const [data, setData] = useState(employees);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    switch (filter) {
      case "1":
        setData(employees.filter((item) => item.available));
        break;
      case "2":
        setData(employees.filter((item) => !item.available));
        break;
      default:
        setData(employees);
    }
  }, [filter, data]);
  return (
    <div className="App">
      <TopNav />

      <Dashboard setData={setData} data={data} setFilter={setFilter} />
    </div>
  );
}

export default App;
