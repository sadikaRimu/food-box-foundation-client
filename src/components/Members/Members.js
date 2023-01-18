import React from 'react';

const Members = () => {
    return (
      <div>
        <h1 className="text-center text-xl lg:text-3xl font-bold my-10">
          Board Members
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="w-11/12 mx-auto lg:w-full lg:mx-0 lg:h-96 px-6 py-3 text-center border-2 border-gray-100 shadow-xl mb-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.ibb.co/jbypBRk/1673869977459.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-xl font-bold">Sudhir Singh</p>
              <small className="divider">FOUNDER</small>
              <small className="text-gray-600">
                "One man on a mission to feed hungry kids" Sudhir Singh
                Co-Founder of End Hunger, an author, blogger, social activist,
                and Founding Director of Food Box Foundation. He holds a degree
                in Engineering.When the entire nation was suffering from COVID
                several families suffered to get their end meal. He was
                volunteering with NGOs spending an entire day providing food and
                necessities to nearby locality; He helped more than 100 families
                with his team to get their sustenance.He and his brother have
                dedicated a significant amount of time and effort to pioneer
                solutions to serve the disadvantaged.
              </small>
            </div>
            <div className="w-11/12 mx-auto lg:w-full lg:mx-0 lg:h-96 px-6 py-3 text-center border-2 border-gray-100 shadow-xl">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-xl font-bold">Priya Singh</p>
              <small className="block">President</small>
              <small className="text-gray-600">
                Priya Has completed her MBBS from XYZ Universityand has been
                working with several NGOs assisting by providing Free Medical
                Treatment to unprivileged kids and Families. She Is
                Volunteeringwiththe Food Box Foundation and Taking
                responsibility for“No Kids should be Left hungry”Priya has spent
                the past 5 years working on community development projects
                worldwide. She has worked for various nonprofits helping
                establish quality services for the underserved population, this
                includes work nationally and internationally in places such as
                Russia, and the Philippines. Additionally, Priya is a volunteer
                for none profits, where she tackled issues such as HIV/AIDS,
                malnourishment, and community development while immersing
                herself in the local life and culture.
              </small>
            </div>
          </div>
          <div>
            <div className="w-11/12 mx-auto lg:w-full lg:mx-0 lg:h-96 px-6 py-3 text-center border-2 border-gray-100 shadow-xl mb-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://i.ibb.co/Ht1CHqw/1673869977472.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-xl font-bold">Mandheer Kushwaha</p>
              <small className="divider">CO-FOUNDER</small>
              <small className="text-gray-600">
                Hey, my name is Mandheer Kushwaha I am a Tech professional,
                Educator, and Co-Founder of End Hunger Nonprofit and Food Box
                foundation.Iorganize programming for children and teens in
                outdoor education and sustainability. I have a passion for
                travel and cultural exchanges including several recent trips to
                South India.Ihave taken a step toward kid beggars to employment,
                educating entrepreneurial skills Street kids inMy available
                time& feeding Unprivileged kids across the city.
              </small>
            </div>
            <div className="w-11/12 mx-auto lg:w-full lg:mx-0 lg:h-96 px-6 py-3 text-center border-2 border-gray-100 shadow-xl">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-gray-200 ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="text-xl font-bold">Diksha Kushwaha</p>
              <small className="block">Secretary</small>
              <small className="text-gray-600">
                Diksha has Been A waste of Experience In social Responsibility,
                assisting Women by Providing Entrepreneurial Skills Has been a
                Board member of the welfare society. Diksha is a business
                process consultant, a teacherwho works with all types of
                organizations to smooth out their operations to achieve more
                with fewer resources. She has an extensive background in
                business process automation and global project management.
                Diksha is passionate about collaborative decision-making and
                working together to achieve great things. Diksha holds a
                Master’s Degree from the University of Allahabad, Uttar Pradesh,
                India, working as an Assistant Professor
              </small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Members;