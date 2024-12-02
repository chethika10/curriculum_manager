import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useConfirm } from "material-ui-confirm";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const confirm = useConfirm();

  const getdata = async () => {
    const { data } = await axiosPrivate.get("/user/getall");
    const data2 = Array.from(data);
    setUsers(data2);
    // console.log("asdf", data2);
  };
  const removeUser = (id) => {
    confirm({
      title: "Confirm remove",
      description: "this will remove the user permenatly",
      confirmationText: "remove",
      confirmationButtonProps:{color: 'error'}
    })
      .then(() => {})
      .catch(() => {});
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="back">
      All Users
      <br />
      <br />
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => addUser(data[0])}
      >
        +Add User
      </button>
      <br />
      <br />
      <table className="table table-info">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Role</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, i) => {
            return (
              <tr key={i}>
                <th scope="row">{data[0]}</th>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => removeUser(data[0])}
                  >
                    remove
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

export default AllUsers;
