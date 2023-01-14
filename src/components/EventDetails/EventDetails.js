import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';
import Update from '../Update/Update';

const EventDetails = () => {
    const data= useLoaderData();
    return (
        <Details data={data}></Details>
    );
};

export default EventDetails;