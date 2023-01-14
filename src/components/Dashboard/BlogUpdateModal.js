import React from 'react';

const BlogUpdateModal = ({ blogUpdate, handleUpdateContent }) => {
  return (
    <div className="">
      <input type="checkbox" id="update-details" className="modal-toggle " />
      <label htmlFor="update-details" className="modal cursor-pointer">
        <label
          className="modal-box relative rounded-none overflow-y-scroll w-80"
          htmlFor=""
        >
          <form
            action=""
            onSubmit={(event) => handleUpdateContent(blogUpdate._id, event)}
          >
            <div>
              <legend htmlFor="">
                <b>Title</b>{" "}
              </legend>
              <input
                type="text"
                name="title"
                className="input input-bordered input-sm w-full"
                defaultValue={blogUpdate.title}
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
                defaultValue={blogUpdate.authorName}
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
                defaultValue={blogUpdate.date}
              />
            </div>{" "}
            <br />
            <div>
              <legend htmlFor="">
                <b>Content</b>
              </legend>
              <textarea
                id="w3review"
                type="text"
                name="content"
                rows="4"
                cols="50"
                className="textarea textarea-bordered h-24 w-full"
                defaultValue={blogUpdate.content}
              ></textarea>
            </div>
            <button className="btn btn-wide btn-sm mt-5" type="submit">
              Update
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default BlogUpdateModal;