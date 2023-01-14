import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Home/Home/shared/Spinner/Spinner';

const Events = () => {
  const {
    data: events = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["event"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/event");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
    return (
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">All Events</h2>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {events.map((event) => (
            <div key={event._id} className="card w-96 bg-slate-100 shadow-xl">
              <figure className="px-5 pt-5 w-96 h-1/2">
                <img
                  src={event.img}
                  alt="Shoes"
                  className="rounded-xl w-96 h-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{event.title}</h2>
                <p>
                  <strong>Author: </strong>
                  {event.authorName}
                </p>
                <p>{event?.brief?.slice(0, 100) + "..."}</p>
                <div className="card-actions">
                  <Link to={`/events/${event._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Events;