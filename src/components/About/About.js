import React from 'react';
import image from '../../assets/icons/icon.png'

const About = () => {
    return (
      <div className="w-11/12 shadow-xl mx-auto p-16 text-justify">
        <h1 className="text-center text-xl lg:text-3xl font-bold mb-3">
          Welcome to Food Box Foundation Since <span className='text-yellow-600 text-5xl'>2021</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-justify items-center">
          <div>
            <img src={image} alt="" className="w-full h-full" />
          </div>
          <article>
            <strong>
              <span className="text-3xl">F</span>ood Box Foundation
            </strong>
            ’s key campaign is aimed at providing daily nutritious & hygienic
            meals to poor underprivileged kids across the country. The aim of
            this campaign is “No kid should be left hungry”. We cook food in our
            kitchen and get delivered to the kids. End hunger kitchen has
            responded to the hunger crisis in India in covid crisis by providing
            food to people in need through a nationwide network of food banks.
          </article>
        </div>
        <article>
          The concept of food banking was developed by{" "}
          <strong>Sudhir Singh</strong> in Prayagraj, UP in early 2021. Sudhir
          Singh, Engineer,the authorhad been volunteering at a food bank
          struggling to find food to serve kids facing hunger in covid crisis.
          one day he saw a few kids were surviving outside the hotel in the
          assurance that somebody will propose to them some food, a gentleman
          departed unfinished food on his plate and got on to the washroom. the
          staffer picks up the plate and settles it in the dustbin. kids run
          towards the dustbin to snatch unfinished food. That view crumbled
          Singh's heart, with that an organization was born.
        </article>
        <br />
        <br />
        <article>
          Sudhir Singh stabilized the first food bank in Prayagraj, UP (END
          HUNGER) as the Prayag’s first food bank. In its initial years, Singh
          and his team of volunteers distributed 25,000 kg of food to people in
          need. The word of the food bank’s success quickly spread, and the city
          began to take note. by the end of the covid many people came forward
          to help him in his missionization and he has fed 50,000+ hungry out of
          his goal of 100,000 in its first year.
        </article>
        <br />
        <br />
        <article>
          Today, Food Box Foundation is the nation’s largest domestic
          hunger-relief organization—a powerful and efficient network of several
          food banks across the country. As food insecurity rates hold steady at
          the highest levels ever, the Food Box Foundation network of food banks
          has risen to meet the need. We feed lakh people at risk of hunger,
          including children and seniors. Learn more about how we get food to
          people in need in our "How We Work" section. Support Food Box
          Foundation and help solve hunger.{" "}
        </article>

        <h1 className="divider mt-10 text-center text-2xl font-semibold">
          Donate. Volunteer.
        </h1>
      </div>
    );
};

export default About;