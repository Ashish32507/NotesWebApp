import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function AddNotes({ userId, getAllData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const dataRes = {
      title: data.title,
      data: data.data,
      user: userId,
    };
    await axios.post("http://localhost:4000/notes/newnotes", dataRes);
    getAllData();

    reset(); // This will clear the form fields
  };

  return (
    <div className="w-full pt-10 bg-slate-300 px-10 pb-10">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-full mx-auto bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Notes</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              name="title"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="data"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              {...register("data", { required: "Message is required" })}
              id="data"
              name="data"
              rows="4"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
            {errors.data && (
              <span className="text-red-500 text-sm">
                {errors.data.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotes;
