import React from "react";

const AddEmpModal = ({ totalEmp, setTotalEmp, toggleModal }) => {
  const [empData, setEmpData] = React.useState({
    id: crypto.getRandomValues(new Uint32Array(1))[0],
    name: "",
    department: "",
    available: true,
    gender: "",
    designation: "",
    joiningDate: "",
    age: 0,
  });

  const addEmployee = (e) => {
    if (
      !empData.name ||
      !empData.department ||
      !empData.designation ||
      !empData.joiningDate ||
      !empData.gender ||
      !empData.age
    ) {
      alert("Please fill all the fields");
      return;
    }
    setTotalEmp([...totalEmp, empData]);
    toggleModal();
    alert("Emloy Added Successfully");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "50%",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "450px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Add Employee</h3>
          <button
            type="button"
            className="btn-close"
            onClick={toggleModal}
          ></button>
        </div>
        <hr />

        <div
          style={{
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) =>
                  setEmpData({ ...empData, name: e.target.value })
                }
              />
            </div>
            <div
              className="mb-3"
              style={{
                marginLeft: "5px",
              }}
            >
              <label for="department" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                style={{
                  width: "12rem",
                }}
                onChange={(e) =>
                  setEmpData({ ...empData, gender: e.target.value })
                }
              >
                <option selected>Choose...</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="mb-3">
              <label for="available" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="available"
                onChange={(e) =>
                  setEmpData({
                    ...empData,
                    age: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="mb-3"
              style={{
                marginLeft: "5px",
              }}
            >
              <label for="available" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                id="available"
                onChange={(e) =>
                  setEmpData({
                    ...empData,
                    designation: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="mb-3">
              <label for="available" className="form-label">
                Department
              </label>
              <input
                type="text"
                className="form-control"
                id="available"
                onChange={(e) =>
                  setEmpData({ ...empData, department: e.target.value })
                }
              />
            </div>
            <div
              className="mb-3"
              style={{
                marginLeft: "5px",
              }}
            >
              <label for="available" className="form-label">
                Joining Date
              </label>
              <input
                type="date"
                className="form-control"
                id="available"
                style={{
                  width: "12rem",
                }}
                onChange={(e) =>
                  setEmpData({ ...empData, joiningDate: e.target.value })
                }
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={addEmployee}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmpModal;
