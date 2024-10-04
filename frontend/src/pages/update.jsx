import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function update() {
  const [updateBook, setUpdateBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdateBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:8000/books/${id}`,
        updateBook
      );
      console.log(res);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="mb-5 text-2xl">Update the book</h1>
      <div className="flex flex-col gap-3 text-sm w-[300px]">
        <input
          className="p-2 bg-zinc-700 outline-none"
          type="text"
          placeholder="title"
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <input
          className="p-2 bg-zinc-700 outline-none"
          type="text"
          placeholder="desc"
          onChange={(e) => handleChange(e)}
          name="desc"
        />
        <input
          className="p-2 bg-zinc-700 outline-none"
          type="number"
          placeholder="price"
          onChange={(e) => handleChange(e)}
          name="price"
        />
        <input
          className="p-2 bg-zinc-700 outline-none"
          type="text"
          placeholder="cover"
          onChange={(e) => handleChange(e)}
          name="cover"
        />
      </div>
      <button
        className="px-7 py-2 mt-6 border-zinc-700 rounded-full border"
        onClick={handleClick}
      >
        Update
      </button>
    </div>
  );
}

export default update;
