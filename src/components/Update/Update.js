import React from 'react';

const Update = ({ data, handleUpdateContent }) => {
  const {
    img,
    title,
    authorName,
    brief,
    details,
    info,
    conclusion,
    link,
    date,
    _id,
  } = data;
  return (
    <div>
      <img
        className="w-full mx-auto rounded-lg shadow-xl h-96"
        src={img}
        alt=""
      />
      <form
        className="my-10"
        action=""
        onSubmit={(event) => handleUpdateContent(_id, event)}
      >
        <div>
          <legend htmlFor="">
            <b>Title</b>{" "}
          </legend>
          <input
            type="text"
            name="title"
            className="input input-bordered input-sm w-full"
            defaultValue={title}
          />
        </div>{" "}
        <br />
        <div>
          <legend htmlFor="">
            <b>Author Name</b>{" "}
          </legend>
          <input
            type="text"
            name="authorName"
            className="input input-bordered input-sm w-full"
            defaultValue={authorName}
          />
        </div>{" "}
        <br />
        <div>
          <legend htmlFor="">
            <b>Date</b>{" "}
          </legend>
          <input
            type="date"
            name="date"
            className="input input-bordered input-sm w-full"
            defaultValue={date}
          />
        </div>{" "}
        <br />
        <div className="form-control w-full">
          <legend className="font-bold">Brief</legend>
          <textarea
            type="text"
            name="brief"
            defaultValue={brief}
            className="input input-bordered border-2 border-indigo-500 p-2 mt-3"
          />
          <legend className="mt-5 font-bold">
            Important Information
          </legend>
          <textarea
            type="text"
            name="info"
            defaultValue={info}
            className="input input-bordered border-2 h-24 border-indigo-500 p-2 mt-3"
          />
          <legend className="mt-5 font-bold">Details</legend>
          <textarea
            type="text"
            name="details"
            defaultValue={details}
            className="input input-bordered border-2 h-24 border-indigo-500 p-2 mt-3"
          />
          <legend className="mt-5 font-bold">Conclusion</legend>
          <textarea
            type="text"
            name="conclusion"
            defaultValue={conclusion}
            className="input input-bordered border-2 h-24 border-indigo-500 p-2 mt-3"
          />
          <legend className="mt-5 font-bold">Important Links</legend>
          <input
            type="url"
            name="link"
            defaultValue={link}
            className="input input-bordered border-2 border-indigo-500 p-2 mt-3"
          />
        </div>
        <div className="w-full">
          <button className="btn btn-sm mt-5 w-full mx-auto" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;