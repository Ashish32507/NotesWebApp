import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function NotesCard(props) {
  const { title, data } = props.note;
  {
    console.log(props.data);
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{data}</p>
        <div className="w-full flex justify-around items-center">
          <FaRegEdit />
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
