import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { json, useLocation } from "react-router-dom";

const ViewModule = () => {
  const axiosPrivate = useAxiosPrivate();
  const [module, setModule] = useState({
    code: "",
    title: "",
    gpa: true,
    lectureHours: 0,
    labHours: 0,
  });
  const location = useLocation();
  const index = location.state.moduleCode;

  const getdata = async () => {
    const { data } = await axiosPrivate.get(
      "/module/getbycode/" + String(index)
    );
    // const data2 = Array.from(data);
    setModule(data);
    // console.log("/module/getbycode/" + String(index))
    console.log("asdf", data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="back">
      View Module
      <br />
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="code" className="form-label">
          Module code
        </label>
        <input
          //   onChange={(e) => setCode(e.target.value)}
          disabled
          value={module.code}
          type="text"
          className="form-control bg-transparent"
          id="code"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Module title
        </label>
        <input
          //   onChange={(e) => setTitle(e.target.value)}
          disabled
          value={module.title}
          type="text"
          className="form-control bg-transparent"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="isgpa" className="form-label">
          GPA/NGPA
        </label>
        <br />
        <select
          //   onChange={(e) => setGpa(e.target.value)}
          disabled
          value={module.gpa ? 0 : 1}
          name="isgpa"
          id="isgpa"
        >
          <option value="0">GPA</option>
          <option value="1">NGPA</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="lecHours" className="form-label">
          Lecture Hours per week
        </label>
        <input
          //   onChange={(e) => setLectureHours(e.target.value)}
          disabled
          value={module.lectureHours}
          type="number"
          className="form-control bg-transparent"
          id="lecHours"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="labHours" className="form-label">
          Lab/Tutorial Hours per week
        </label>
        <input
          //   onChange={(e) => setLabHours(e.target.value)}
          disabled
          value={module.labHours}
          type="number"
          className="form-control bg-transparent"
          id="labHours"
        />
      </div>
    </div>
  );
};

export default ViewModule;
