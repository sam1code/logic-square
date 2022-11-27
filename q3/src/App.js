import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard, TopNav } from "./componrnts";
import { employees } from "./data";

function App() {
  const [data, setData] = useState(employees);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    if (filter === "All") {
      setData(employees);
    } else {
      console.log(data);
      setData(data);
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
