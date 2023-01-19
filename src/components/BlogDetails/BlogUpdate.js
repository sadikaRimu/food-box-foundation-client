import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Update from "../Update/Update";

const BlogUpdate = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleUpdateContent = (id, event) => {
    console.log(id);
    event.preventDefault();
    const title = event.target.title.value;
    const authorName = event.target.authorName.value;
    const link = event.target.link.value;
    const brief = event.target.brief.value;
    const details = event.target.details.value;
    const info = event.target.info.value;
    const conclusion = event.target.conclusion.value;
    const date = event.target.date.value;
    const blogInfo = {
      title,
      authorName,
      brief,
      details,
      info,
      conclusion,
      link,
      date,
    };
    fetch(`http://localhost:5000/blog/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(blogInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          event.target.reset();
          navigate("/dashboard/manageBlog");
          toast.success("Blog Updated");
        }
      });
  };
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-center text-3xl font-bold my-3">
        Update Blog Information
      </h1>
      <Update handleUpdateContent={handleUpdateContent} data={data}></Update>
    </div>
  );
};

export default BlogUpdate;
