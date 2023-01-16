import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../../../assets/images/donationPic11.JPG';
import Spinner from '../Home/shared/Spinner/Spinner';

const FirstBlog = () => {
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
      <div className="my-14">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Recent Blog Post
        </h2>
        <div className="hero bg-slate-100 rounded">
          <div className="hero-content flex flex-col-reverse lg:grid lg:grid-cols-2 p-8">
            <div className="w-full text-center lg:text-start">
              <h1 className="text-3xl font-bold">{blogs[0].title}</h1>
              <p className="py-6">{blogs[0].brief}</p>
              <p className="pb-4">{blogs[0].conclusion?.slice(0,50)+'...'}</p>
              <Link to="/blog">
                {" "}
                <button
                  className="btn bg-gradient-to-r from-cyan-700 to-blue-900 border-0 text-white mt-6 rounded-none"
                  value="Save"
                >
                  View More
                </button>
              </Link>
            </div>
            <img src={blogs[0].img} alt="" className="shadow-2xl w-full h-80" />
          </div>
        </div>
      </div>
    );
};

export default FirstBlog;