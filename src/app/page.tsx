"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface dataType {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Home = () => {
  const [data, setdata] = useState<dataType[]>([]);
  const fn = () => {
    axios
      .get("https://todobymalikovshahriyor.onrender.com/api/getAll")
      .then((res) => setdata(res.data));
  };
  useEffect(() => {
    fn();
  }, []);

  return (
    <div>
      <div>
        {data.map((value, i) => (
          <div key={i}>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
