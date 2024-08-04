/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])



  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=10')
  //     .then(res => res.json())
  //   .then(data => setData(data.results))
  // },[]);
  
    // function handleCount() {
    //   setCount(count + 1);
    // }

  return (
    <>
      {/* {
        data.length > 0 ?
          <div>
            {
              data.map(item => 
                <div> {item.gender} {item.email} </div>
              )
            }
          </div> : <div>No data found</div>
      } */}
     
      {/* <div>
        <h2>current value: {count} </h2>
        <button onClick={handleCount} className="btn">
          Increase Count 
        </button>
      </div> */}
      <div>
        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-red-700 sm:block">
                  {' '}
                  Increase Conversion.{' '}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  to="/contact"
                >
                  Get Started
                </Link>

                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
