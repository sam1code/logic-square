import React from "react";
import { getCafesByQuery } from "./functions";

interface ICafeQuerry {
  name: string;
  street_no: string;
  locality: string;
  postal_code: string;
  lat: string;
  long: string;
}

const Question1 = () => {
  const [cafeResults, setCafeResults] = React.useState<ICafeQuerry[]>([]);
  const handleSearchCafes = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.trim().length > 0) {
      setCafeResults(getCafesByQuery(e.target.value));
    } else {
      setCafeResults([]);
    }
  };
  return (
    <div
      style={{
        marginBottom: "2rem",
      }}
    >
      <div>Question 1</div>
      <div>
        <div
          style={{
            marginBottom: "1rem",
          }}
        >
          search cafe(s): <input type="text" onChange={handleSearchCafes} />
        </div>
        <div>
          {cafeResults.length > 0 && (
            <div>
              <div>Results:</div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Street No</th>
                    <th>Locality</th>
                    <th>Postal Code</th>
                    <th>Lat</th>
                    <th>Long</th>
                  </tr>
                </thead>
                <tbody>
                  {cafeResults.map((cafe, index) => (
                    <tr key={index}>
                      <td>{cafe.name}</td>
                      <td>{cafe.street_no}</td>
                      <td>{cafe.locality}</td>
                      <td>{cafe.postal_code}</td>
                      <td>{cafe.lat}</td>
                      <td>{cafe.long}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div>
          {cafeResults.length > 0 && (
            <div>
              <div>Results:</div>[
              {cafeResults.map((cafe, index) => (
                <div key={index}>
                  &#x007B;
                  <div style={{ marginLeft: "1rem" }}>Name: {cafe.name}</div>
                  <div style={{ marginLeft: "1rem" }}>
                    Street No: {cafe.street_no}
                  </div>
                  <div style={{ marginLeft: "1rem" }}>
                    Locality: {cafe.locality}
                  </div>
                  <div style={{ marginLeft: "1rem" }}>
                    Postal Code: {cafe.postal_code}
                  </div>
                  <div style={{ marginLeft: "1rem" }}>Lat: {cafe.lat}</div>
                  <div style={{ marginLeft: "1rem" }}>Long: {cafe.long}</div>
                  &#x007D;,
                </div>
              ))}
              ]
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question1;
