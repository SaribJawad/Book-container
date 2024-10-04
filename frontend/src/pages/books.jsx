import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

function books() {
  const [books, setBookes] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        setBookes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="mb-5 text-2xl">Book container</h1>
      <div className="flex gap-5">
        {books?.map((book) => (
          <div
            className="flex-1 p-8 border rounded-xl border-zinc-700 flex flex-col gap-1 items-center"
            key={book.id}
          >
            {book.cover && (
              <img
                className="h-[300px] w-[200px] object-cover bg-zinc-700"
                src={book.cover}
                alt=""
              />
            )}
            <div className="text-xs m-2">
              <h2>
                Title : <span className="text-zinc-400">{book.title}</span>
              </h2>
              <p>
                Description : <span className="text-zinc-400">{book.desc}</span>
              </p>
              <span className="text-zinc-400">${book.price}</span>
            </div>
            <div className="flex gap-4">
              <button
                className="border text-xs border-red-300 rounded-full text-red-200 bg-red-400 bg-opacity-5 px-5 py-2 "
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
              <button className="border border-green-300 rounded-full text-green-200 bg-green-400 bg-opacity-5 px-5 text-xs py-2">
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="px-7 py-2 mt-6 border-zinc-700 rounded-full border">
        <Link to={"/add"}>Add new button</Link>
      </button>
    </div>
  );
}

export default books;
