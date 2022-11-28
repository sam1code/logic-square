import { useEffect, useState } from "react";
import "./App.css";
import { Dashboard, TopNav } from "./componrnts";
import { employees } from "./data";

function App() {
  const [totalEmp, setTotalEmp] = useState(employees);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    switch (filter) {
      case "1":
        const available = employees.filter((item) => item.available);
        setData(
          available.filter(
            (item, ind) =>
              item.available &&
              ind > pagination * 10 - 10 &&
              ind < pagination * 10
          )
        );
        break;
      case "2":
        const notAvailable = employees.filter((item) => !item.available);
        setData(
          notAvailable.filter(
            (item, ind) =>
              !item.available &&
              ind > pagination * 10 - 10 &&
              ind < pagination * 10
          )
        );
        break;
      default:
        setData(
          employees.filter(
            (item, ind) => ind > pagination * 10 - 10 && ind < pagination * 10
          )
        );
    }
  }, [filter, pagination]);
  return (
    <div className="App">
      <TopNav />

      <Dashboard
        setData={setData}
        data={data}
        setFilter={setFilter}
        setPagination={setPagination}
        pagination={pagination}
        totalData={totalEmp}
        setTotalEmp={setTotalEmp}
      />
    </div>
  );
}

export default App;
