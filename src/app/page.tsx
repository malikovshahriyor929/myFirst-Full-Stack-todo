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
      <div>
        {data.map((value: any, i) => (
          <div key={i}>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
