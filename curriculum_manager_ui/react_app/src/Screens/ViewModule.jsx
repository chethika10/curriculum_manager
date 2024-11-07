import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { json, useLocation } from 'react-router-dom';


const ViewModule = () => {
const axiosPrivate= useAxiosPrivate();
const [module, setModule] = useState([]);
const location = useLocation();
const index = location.state.moduleCode;

    const getdata = async () => {
        const { data } = await axiosPrivate.get("/module/getbycode/" + String(index));
        // const data2 = Array.from(data);
        setModule(data);
        // console.log("/module/getbycode/" + String(index))
        // console.log("asdf", data);
      };
      useEffect(() => {
        getdata();
      }, []);
  return (
    <div>ViewModule
        <br />
    </div>
  )
}

export default ViewModule