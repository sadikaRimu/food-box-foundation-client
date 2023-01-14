import React from 'react';

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
        </div>
      </div>
    );
};

export default Details;