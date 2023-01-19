import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTrashAlt, FaRegEdit, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../Home/Home/shared/Spinner/Spinner";

const ManageEvent = () => {
  const [eventModal, setEventModal] = useState("");
  const [eventUpdate, setEventUpdate] = useState("");
  const {
    data: events = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["event"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/event");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const handleDelete = (id) => {
    const remove = window.confirm("Are you sure you want to delete?");
    if(remove){
      fetch(`http://localhost:5000/event/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Event Deleted.");
            refetch();
          }
        });
    }
    
  };
  
  return (
    <div>
      <h2>Total events posted: {events.length}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-16">
        {events?.map((event) => (
          <div key={event._id}>
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl rounded-none hover:scale-105 hover:transition-transform duration-300 ease-in-out">
              <figure className="w-full h-3/4">
                <img src={event.img} alt="Shoes" className="w-full h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <div className="flex justify-between">
                  <small>
                    <strong>Organizer:</strong> <i>{event.authorName}</i>
                  </small>
                  <small className="text-gray-400">
                    <strong>Date:</strong> <i>{event?.date}</i>
                  </small>
                </div>
                <p>{event?.brief?.slice(0, 100) + "..."}</p>
                <div className="card-actions justify-between ">
                  <div className="flex justify-between">
                    <label
                      htmlFor="view-details"
                      className="btn bg-transparent border-0 text-slate-800 hover:bg-transparent text-lg tooltip mt-1"
                      data-tip="View Details"
                    >
                      <Link to={`/dashboard/manageEvent/${event._id}`}>
                        <FaBars></FaBars>
                      </Link>
                    </label>
                    <label
                      htmlFor="update-details"
                      className="btn bg-transparent border-0 text-slate-800 hover:bg-transparent text-xl tooltip"
                      data-tip="Edit"
                    >
                      <Link to={`/dashboard/manageEvent/update/${event._id}`}>
                        <FaRegEdit></FaRegEdit>
                      </Link>
                    </label>
                  </div>
                  <div className="justify-end">
                    <button
                      className="hover:scale-125 hover:transition-transform text-xl tooltip text-red-700"
                      data-tip="Delete"
                      onClick={() => handleDelete(event._id)}
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvent;
