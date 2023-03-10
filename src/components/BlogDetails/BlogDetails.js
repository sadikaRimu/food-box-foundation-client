import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';
import Update from '../Update/Update';

const BlogDetails = () => {
    const data =
      useLoaderData();
    return (
      <Details data={data}></Details>
    );
};

export default BlogDetails;