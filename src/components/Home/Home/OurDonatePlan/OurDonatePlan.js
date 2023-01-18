import React from 'react';
import food from '../../../../assets/icons/food.png';
import person from '../../../../assets/icons/person.png';
import hand from '../../../../assets/icons/hand.jpg'

const OurDonatePlan = () => {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center my-4">Our Donate Plan</h2>
        <p className="text-justify lg:text-center w-11/12 lg:w-1/2 mx-auto">
          Food Box Foundation is the nation’s largest domestic hunger-relief
          organization A powerful and efficient network of several food banks
          across the country.
        </p>
        <div className="grid gap-16 grid-cols-1 mx-auto lg:mx-0 lg:grid-cols-3 md:grid-cols-2 mt-8">
          <div className="card w-11/12 lg:w-96 mx-auto bg-rose-100 shadow-xl">
            <img className="h-14 w-14 ml-8 mt-6" src={food} alt="" />
            <div className="card-body">
              <h2 className="card-title">Food for a children</h2>
              <p>
                End hunger kitchen has responded to the hunger crisis in India
                in covid crisis by providing food to people in need through a
                nationwide network of food banks.{" "}
              </p>
            </div>
          </div>
          <div className="card w-11/12 lg:w-96 mx-auto bg-orange-200 shadow-xl">
            <img className="h-16 w-16 ml-8 mt-6" src={person} alt="" />
            <div className="card-body">
              <h2 className="card-title">Starting Of Journey</h2>
              <p>
                In its initial years, Sudhir Singh and his team of volunteers
                distributed 25,000 kg of food to people in need. The word of the
                food bank’s success quickly spread, and the city began to take
                note.
              </p>
            </div>
          </div>
          <div className="card w-11/12 lg:w-96 mx-auto bg-cyan-100 shadow-xl">
            <img className="h-20 w-20 ml-8 mt-3" src={hand} alt="" />
            <div className="card-body">
              <h2 className="card-title">People's Response</h2>
              <p>
                At the end of the covid many people came forward in the
                missionization and has fed 50,000+ hungry out of his goal of
                100,000 in its first year.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default OurDonatePlan;