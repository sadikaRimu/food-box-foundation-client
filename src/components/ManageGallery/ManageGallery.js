import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTrashAlt, FaRegEdit, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import GalleryUpdateModal from "./GalleryUpdateModal";
import { useForm } from "react-hook-form";
import Spinner from "../Home/Home/shared/Spinner/Spinner";

const ManageGallery = () => {
    const [galleryUpdate, setGalleryUpdate] = useState("");
    const {
      data: images = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["blog"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/gallery");
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return <Spinner></Spinner>;
    }
    const handleDelete = (id) => {
      const remove = window.confirm('Are you sure you want to delete?');
      if(remove){
        fetch(`http://localhost:5000/gallery/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Image Deleted.");
              refetch();
            }
          });
      }
    };

    const handleUpdateContent = (id, event) => {
      event.preventDefault();
      const title = event.target.title.value;
      const galleryInfo = {
        title,
      };
      fetch(`http://localhost:5000/gallery/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(galleryInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Gallery Updated");
            event.target.reset();
            refetch();
          }
        });
    };
  return (
    <div>
      <h2>Total image posted: {images.length}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-16">
        {images?.map((image) => (
          <div key={image._id}>
            <GalleryUpdateModal
              galleryUpdate={galleryUpdate}
              handleUpdateContent={handleUpdateContent}
            ></GalleryUpdateModal>
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl rounded-none hover:scale-105 hover:transition-transform duration-300 ease-in-out p-3">
              <figure className="w-full h-3/4">
                <img src={image.img} alt="Shoes" className="w-full h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{image.title}</h2>
                <div className="flex justify-between">
                  <small className="text-gray-400">
                    <strong>Date:</strong> <i>{image?.date}</i>
                  </small>
                </div>
                <div className="card-actions justify-between ">
                  <div className="flex justify-between">
                    <label
                      htmlFor="update-details"
                      className="btn bg-transparent border-0 text-slate-800 hover:bg-transparent text-xl tooltip"
                      data-tip="Edit"
                      onClick={() => setGalleryUpdate(image)}
                    >
                      <FaRegEdit></FaRegEdit>
                    </label>
                  </div>
                  <div className="justify-end">
                    <button
                      className="hover:scale-125 hover:transition-transform text-xl tooltip text-red-700"
                      data-tip="Delete"
                      onClick={() => handleDelete(image._id)}
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

export default ManageGallery;
