import React from 'react';

const BlogModal = ({ blogModal }) => {
  return (
    <div>
      {/* modal  */}
      <input type="checkbox" id="view-details" className="modal-toggle" />
      <label htmlFor="view-details" className="modal cursor-pointer">
        <label
          className="modal-box relative rounded-none overflow-y-scroll"
          htmlFor=""
        >
          <h3 className="text-lg font-bold">
            <i>{blogModal.title}</i>
          </h3>
          <p className="py-4">
            <strong>Blog : </strong>
            {blogModal.content}
          </p>
        </label>
      </label>
    </div>
  );
};

export default BlogModal;