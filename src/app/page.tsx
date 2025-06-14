"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState([]);
  const fn = () => {
    axios
      .get("https://todobymalikovshahriyor.onrender.com/api/getAll")
      .then((res) => setdata(res.data));
  };
  useEffect(() => {
    fn();
  }, [fn]);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export default Home;
