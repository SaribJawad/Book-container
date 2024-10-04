import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/books", book);
      console.log(res);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1 className="mb-5 text-2xl">Add new book</h1>
      <div className="flex flex-col gap-3 text-sm w-[300px]">
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
          className="p-2 bg-zinc-700 outline-none"
        />
        <input
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="desc"
          className="p-2 bg-zinc-700 outline-none"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
          className="p-2 bg-zinc-700 outline-none"
        />
        <input
          type="text"
          placeholder="cover"
          onChange={handleChange}
          name="cover"
          className="p-2 bg-zinc-700 outline-none"
        />
      </div>
      <button
        className="px-7 py-2 mt-6 border-zinc-700 rounded-full border"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

export default add;
