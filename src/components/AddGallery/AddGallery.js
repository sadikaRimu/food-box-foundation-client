import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddGallery = () => {
  const [processing, setProcessing]  = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const handleImageSubmit = (data) => {
      setProcessing(true);
      const image = data.image[0];
      const formData = new FormData();

      formData.append("image", image);
      const secret = process.env.REACT_APP_imgbb_api;
      fetch(`https://api.imgbb.com/1/upload?key=${secret}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          const galleryInfo = {
            img: result.data?.display_url,
            title: data.title,
            date: data.date,
          };
          <><p>Loading</p></>
          fetch(`http://localhost:5000/addgallery`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(galleryInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                navigate("/dashboard/manageGallery");
                toast.success("New Image Added To Gallery");
              }
            });
        });
    };
    return (
      <div className="w-full p-7 ">
        <h2 className="text-4xl font-bold text-center ">Add New Image</h2>
        <form
          className="w-full lg:w-3/4 mx-auto shadow-2xl p-7"
          onSubmit={handleSubmit(handleImageSubmit)}
        >
          <div className="form-control w-full mt-6">
            <input
              type="text"
              {...register("title", {
                required: "title is required",
              })}
              placeholder="Image Title"
              className="border-b-2 border-indigo-500 p-2"
            />
            {errors.title && (
              <p className="text-red-600">{errors.title?.message}</p>
            )}
          </div>
          <div className="form-control w-full mt-6">
            <input
              type="date"
              {...register("date", {
                required: "Date is required",
              })}
              placeholder="Date Title"
              className="border-b-2 border-indigo-500 p-2"
            />
            {errors.date && (
              <p className="text-red-600">{errors.date?.message}</p>
            )}
          </div>
          <div className="form-control w-full mt-6">
            <input
              type="file"
              {...register("image", {
                required: "Photo is required",
              })}
              placeholder="Choose An Image"
              className="border-b-2 border-indigo-500 p-2"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
          </div>
          {processing ? (
            <button
              className="btn btn-md bg-gradient-to-r from-cyan-500 to-blue-700 border-0 w-full text-white mt-6"
              value="Save"
              type="submit"
              disabled
            >
              Processing...
            </button>
          ) : (
            <button
              className="btn btn-md bg-gradient-to-r from-cyan-700 to-blue-900 border-0 w-full text-white mt-6"
              value="Save"
              type="submit"
            >
              Add New Image
            </button>
          )}
        </form>
      </div>
    );
};

export default AddGallery;