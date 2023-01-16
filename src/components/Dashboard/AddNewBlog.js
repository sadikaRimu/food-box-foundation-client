import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddNewBlog = () => {
  const [processing, setProcessing] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleBlogSubmit = (data)=>{
      setProcessing(true)
        const image = data.image[0];
        const formData = new FormData();
        
        formData.append("image", image);
        const secret = process.env.REACT_APP_imgbb_api;
        fetch(
          `https://api.imgbb.com/1/upload?key=${secret}`,
          {
            method: "POST",
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((result) => {
            const blogInfo = {
              img: result.data.display_url,
              title: data.title,
              authorName: data.authorName,
              brief: data.brief,
              details: data.details,
              info: data.info,
              conclusion: data.conclusion,
              link: data.link,
              date: data.date,
            };
            fetch(`http://localhost:5000/addblog`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                // authorization: `Bearer ${localStorage.getItem("tech-token")}`,
              },
              body: JSON.stringify(blogInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                  navigate("/dashboard/manageBlog");
                  toast.success("New Blog Added.");
                }
              });
          });
    }
    return (
      <div className="w-full p-7 ">
        <h2 className="text-4xl font-bold text-center ">Add A New Blog</h2>
        <form
          className="w-full lg:w-3/4 mx-auto shadow-2xl p-7"
          onSubmit={handleSubmit(handleBlogSubmit)}
        >
          <div className="form-control w-full mt-6">
            <input
              type="text"
              {...register("title", {
                required: "title is required",
              })}
              placeholder="Blog Title"
              className="border-b-2 border-indigo-500 p-2"
            />
            {errors.title && (
              <p className="text-red-600">{errors.title?.message}</p>
            )}
          </div>
          <div className="form-control w-full mt-6">
            <input
              type="text"
              {...register("authorName", {
                required: "AuthorName is required",
              })}
              placeholder="Author Name"
              className="border-b-2 border-indigo-500 p-2"
            />
            {errors.authorName && (
              <p className="text-red-600">{errors.authorName?.message}</p>
            )}
          </div>
          <div className="sm:block lg:flex gap-4 items-center">
            <div className="form-control w-full lg:w-1/2 mt-6">
              <input
                type="file"
                {...register("image", {
                  required: "Photo is required",
                })}
                placeholder="Choose An Image"
                className="border-b-2 border-indigo-500 p-2 mt-5"
              />
              {errors.image && (
                <p className="text-red-600">{errors.image?.message}</p>
              )}
            </div>
            <div className="form-control w-full lg:w-1/2 mt-6">
              <input
                type="date"
                {...register("date", {
                  required: "Date is required",
                })}
                placeholder="Date Title"
                className="border-b-2 border-indigo-500 p-2 mt-6"
              />
              {errors.date && (
                <p className="text-red-600">{errors.date?.message}</p>
              )}
            </div>
          </div>

          <div className="divider my-10">
            <div className="badge badge-primary badge-outline">
              Blog Details
            </div>
          </div>

          <div className="form-control w-full mt-6">
            <textarea
              type="text"
              {...register("brief", {
                required: "Brief Description is required",
              })}
              placeholder="Brief description of blog*"
              className="input input-bordered border-2 border-indigo-500 p-2"
            />
            {errors.brief && (
              <p className="text-red-600">{errors.brief?.message}</p>
            )}
            <textarea
              type="text"
              {...register("info")}
              placeholder="Provide blog information*"
              className="input input-bordered border-2 h-24 border-indigo-500 p-2 mt-5"
            />
            {errors.info && (
              <p className="text-red-600">{errors.info?.message}</p>
            )}
            <textarea
              type="text"
              {...register("details", {
                required: "Details is required",
              })}
              placeholder="Detailed Description of Blog*"
              className="input input-bordered border-2 h-24 border-indigo-500 p-2 mt-5"
            />
            {errors.details && (
              <p className="text-red-600">{errors.details?.message}</p>
            )}
            <textarea
              type="text"
              {...register("conclusion", {
                required: "Conclusion is required",
              })}
              placeholder="Conclusion of the blog*"
              className="input input-bordered border-2 h-24 border-indigo-500 p-2 mt-5"
            />
            {errors.conclusion && (
              <p className="text-red-600">{errors.conclusion?.message}</p>
            )}
            <input
              type="url"
              {...register("link")}
              placeholder="Other relevant links(Optional)"
              className="input input-bordered border-2 border-indigo-500 p-2 mt-5"
            />
            {errors.content && (
              <p className="text-red-600">{errors.content?.message}</p>
            )}
          </div>

          {processing ? (
            <button
              className="btn btn-md bg-gradient-to-r from-cyan-500 to-blue-700 border-0  w-full text-white mt-6"
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

export default AddNewBlog;