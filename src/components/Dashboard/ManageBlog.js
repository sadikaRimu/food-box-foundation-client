import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTrashAlt, FaRegEdit, FaRegEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import Spinner from '../Home/Home/shared/Spinner/Spinner';

const ManageBlog = () => {
  const [blogModal, setBlogModal] = useState('');
  const [blogUpdate, setBlogUpdate] = useState('');
    const {data:blogs= [], refetch, isLoading} = useQuery({
      queryKey: ["blog"],
      queryFn: async()=>{
        const res = await fetch("http://localhost:5000/blog")
        const data = await res.json();
        return data;
      } 
    });
    if(isLoading){
        return <Spinner></Spinner>;
    }
    const handleDelete = (id) =>{
      const remove = window.confirm("Are you sure you want to delete?");
      if(remove){
        fetch(`http://localhost:5000/blog/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Content Deleted.");
              refetch();
            }
          });
      }
    }
    
    return (
      <div>
        <h2>Total blog posted: {blogs.length}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-16">
          {blogs?.map((blog) => (
            <div key={blog._id}>
              <div className="card card-compact w-full h-96 bg-base-100 shadow-xl rounded-none hover:scale-105 hover:transition-transform duration-300 ease-in-out">
                <figure className="w-full h-3/4">
                  <img src={blog.img} alt="Shoes" className="w-full h-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <div className="flex justify-between">
                    <small>
                      <strong>Author:</strong> <i>{blog.authorName}</i>
                    </small>
                    <small className="text-gray-400">
                      <strong>Date:</strong> <i>{blog?.date}</i>
                    </small>
                  </div>
                  <p>{blog?.brief?.slice(0, 100) + "..."}</p>
                  <div className="card-actions justify-between ">
                    <div className="flex justify-between">
                      <label
                        htmlFor="view-details"
                        className="btn bg-transparent border-0 text-slate-800 hover:bg-transparent text-lg tooltip mt-1"
                        data-tip="View Details"
                        onClick={() => setBlogModal(blog)}
                      >
                        <Link to={`/dashboard/manageBlog/${blog._id}`}>
                          <FaBars></FaBars>
                        </Link>
                      </label>
                      <label
                        htmlFor="update-details"
                        className="btn bg-transparent border-0 text-slate-800 hover:bg-transparent text-xl tooltip"
                        data-tip="Edit"
                        onClick={() => setBlogUpdate(blog)}
                      >
                        <Link to={`/dashboard/manageBlog/update/${blog._id}`}>
                          <FaRegEdit></FaRegEdit>
                        </Link>
                      </label>
                    </div>
                    <div className="justify-end">
                      <button
                        className="hover:scale-125 hover:transition-transform text-xl tooltip text-red-700"
                        data-tip="Delete"
                        onClick={() => handleDelete(blog._id)}
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
export default ManageBlog;