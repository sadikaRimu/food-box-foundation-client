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
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
            >
              <div className="card w-96 bg-slate-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={blog.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{blog.title}</h2>
                  <p>
                    <strong>Author: </strong>
                    {blog.authorName}
                  </p>
                  <p>{blog?.brief?.slice(0, 100) + "..."}</p>
                  <div className="card-actions">
                    <Link to={`/blog/${blog._id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
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