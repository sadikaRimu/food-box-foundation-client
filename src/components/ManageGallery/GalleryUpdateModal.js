import React from 'react';

const GalleryUpdateModal = ({ galleryUpdate, handleUpdateContent }) => {
    
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
            onSubmit={(event) => handleUpdateContent(galleryUpdate._id, event)}
          >
            <div>
              <legend htmlFor="">
                <b>Title</b>{" "}
              </legend>
              <input
                type="text"
                name="title"
                className="input input-bordered input-sm w-full"
                defaultValue={galleryUpdate.title}
              />
            </div>{" "}
            <br />
            <button className="btn btn-wide btn-sm mt-5" type="submit">
              Update
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default GalleryUpdateModal;