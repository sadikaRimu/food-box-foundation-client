import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({data}) => {
    const {
      img,
      authorName,
      brief,
      details,
      info,
      link,
      conclusion,
      date,
      title,
    } = data;
    return (
      <div className="w-full lg:w-11/12 mx-auto shadow-2xl rounded-lg p-10">
        <img
          className="w-full mx-auto hover:scale-110 hover:transition-transform duration-300 ease-in-out rounded-lg shadow-xl h-96"
          src={img}
          alt=""
        />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-center my-2">{title}</h1>
          <div className="flex justify-between">
            <div>
              <i>
                <p>
                  <strong>Author: </strong>
                  {authorName}
                </p>
              </i>
            </div>
            <div>
              <small className="text-gray-400">Date: {date}</small>
            </div>
          </div>
          <div className="break-words">
            {brief && <div>{brief}</div>}
            {details && <div>{details}</div>}
            {info && <div>{info}</div>}
            {conclusion && <div>{conclusion}</div>}
            {link && (
              <div>You can visit the following links to know more: {link}</div>
            )}
          </div>
          <Link to={`/`}>
            <button className="btn btn-primary btn-sm btn-wide rounded-none bg-gradient-to-r from-cyan-500 to-blue-700 border-0 hover:bg-gradient-to-l from-cyan-600 to-blue-600 mt-5 mx-auto">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Details;