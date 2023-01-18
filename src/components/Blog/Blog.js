import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Home/Home/shared/Spinner/Spinner';

const Blog = () => {
    const {
      data: blogs = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["blog"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/blog");
        const data = await res.json();
        return data;
      },
    });
    if (isLoading) {
      return <Spinner></Spinner>;
    }
    return (
      <div>
        <h2 className="text-2xl font-bold text-center my-8">
          All Published blog
        </h2>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <div className="card card-compact w-11/12 mx-auto lg:w-full h-96 bg-base-100 shadow-xl rounded-none hover:scale-105 hover:transition-transform duration-300 ease-in-out">
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
                    <div className="card-actions mx-auto">
                      <Link to={`/blog/${blog._id}`}>
                        <button className="btn btn-primary btn-sm btn-wide rounded-none bg-gradient-to-r from-cyan-500 to-blue-700 border-0 hover:bg-gradient-to-l from-cyan-600 to-blue-600 ">
                          View Details
                        </button>
                      </Link>
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

export default Blog;