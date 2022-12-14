import React from "react";
import AddEmpModal from "./AddEmpModal";

const BannerZone = ({
  data,
  setData,
  setFilter,
  pagination,
  setPagination,
  totalData,
  setTotalEmp,
  totalEmp,
}) => {
  const [addEmp, setAddEmp] = React.useState(false);
  const addEmployModal = () => {
    setAddEmp(!addEmp);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="question-dashboard">
            <div className="card mt-4 mb-3 mb-md-4">
              <div className="card-body p-3">
                <h5 className="text-secondary mb-2">
                  Available:
                  <span className="font-weight-bold ml-1 text-dark">
                    {totalData?.filter((item) => item.available).length}
                  </span>
                </h5>
                <h5 className="text-secondary">
                  Total:
                  <span className="font-weight-bold ml-1 text-dark">
                    {totalData.length}
                  </span>
                </h5>
                ​
                <button
                  className="btn btn-primary mt-4"
                  onClick={addEmployModal}
                >
                  <i className="fa fa-plus"></i>&nbsp; Add Employee
                </button>
                {addEmp && (
                  <AddEmpModal
                    key={1}
                    toggleModal={() => setAddEmp(!addEmp)}
                    setTotalEmp={setTotalEmp}
                    totalEmp={totalEmp}
                  />
                )}
              </div>
            </div>
            ​
            <select
              class="form-select"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option selected>Filter</option>
              <option value="1">Available</option>
              <option value="2">Not Available</option>
            </select>
            <div className="table-responsive mt-3 mt-md-4 mb-2">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Available</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>
                          <div className="custom-control custom-checkbox ">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                              checked={item.available}
                              onChange={(e) => {
                                const newData = data.map((i) => {
                                  if (i.id === item.id) {
                                    return {
                                      ...i,
                                      available: e.target.checked,
                                    };
                                  }
                                  return i;
                                });
                                setData(newData);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-sm "
                          >
                            <i className="fa fa-edit"></i>&nbsp; Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                          >
                            <i className="fa fa-trash"></i>&nbsp; Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          {pagination > 1 && (
            <button
              className="btn btn-primary"
              onClick={() => setPagination(pagination - 1)}
            >
              Previous
            </button>
          )}

          {totalData.length / 10 > pagination && (
            <button
              className="btn btn-primary"
              onClick={() => setPagination(pagination + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerZone;
