"use client";
import { FormEvent, useEffect, useState } from "react";
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
  const [value, setValue] = useState("");
  const fn = () => {
    axios
      .get("https://todobymalikovshahriyor.onrender.com/api/getAll")
      .then((res) => setdata(res.data));
  };
  useEffect(() => {
    fn();
  }, []);
  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("https://todobymalikovshahriyor.onrender.com/api/create", {
        text: value,
      })
      .then((res) => alert(res.data));
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSend} action="">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <button type="submit">send</button>
        </form>
      </div>
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
