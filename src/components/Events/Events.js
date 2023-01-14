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
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {events.map((event) => (
            <div key={event._id}>
              <div className="card card-compact w-full h-96 bg-base-100 shadow-xl rounded-none hover:scale-105 hover:transition-transform duration-300 ease-in-out">
                <figure className="w-full h-3/4">
                  <img src={event.img} alt="Shoes" className="w-full h-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{event.title}</h2>
                  <div className="flex justify-between">
                    <small>
                      <strong>Organizer:</strong> <i>{event.authorName}</i>
                    </small>
                    <small className="text-gray-400">
                      <strong>Date:</strong> <i>{event?.date}</i>
                    </small>
                  </div>
                  <p>{event?.brief?.slice(0, 100) + "..."}</p>
                  <div className="card-actions justify-between ">
                    <div className="card-actions mx-auto">
                      <Link to={`/events/${event._id}`}>
                        <button className="btn btn-primary btn-sm btn-wide rounded-none bg-gradient-to-r from-cyan-500 to-blue-700 border-0 hover:bg-gradient-to-l from-cyan-600 to-blue-600 ">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Events;