import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const AllModules = () => {
  const [modules, setModules] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();


  const getdata = async () => {
    const { data } = await axiosPrivate.get("/module/getall");
    const data2 = Array.from(data);
    setModules(data2);
    // console.log("asdf", data2);
  };
  const navigateUser = (index) => {
    console.log(index);
    navigate("/viewmodule", { state: { moduleCode: index } });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="back">
      All Modules
      <br />
      <br />
      <br />
      <table className="table table-info">
        <thead>
          <tr>
            <th scope="col">code</th>
            <th scope="col">titile</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((data, i) => {
            return (
              <tr key={i}>
                <th scope="row">{data[0]}</th>
                <td>{data[1]}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => navigateUser(data[0])}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllModules;
