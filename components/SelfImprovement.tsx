import React from 'react';
import Image from 'next/image';
import Emoji from '../public/images/emoji.png'; // Adjust the path as needed

const SelfImprovement = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 flex flex-col items-center text-center">
        <div className="mb-8">
          <p className="text-gray-500 mb-2">Wrong with self-improvement & how we're fixing it.</p>
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center">
            Self-improvement. Ugh.
            <Image src={Emoji} alt="Emoji" width={40} height={40} className="ml-2" />
          </h2>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="mb-8 flex items-start">
            <div className="mr-4">
              <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">It's not as easy as 1-2-3.</h3>
              <p className="text-gray-700">
                The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-start">
            <div className="mr-4">
              <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">Old habits are hard to break.</h3>
              <p className="text-gray-700">
                And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-start">
            <div className="mr-4">
              <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">You and your motivation don't have a long-term relationship.</h3>
              <p className="text-gray-700">
                Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-start">
            <div className="mr-4">
              <div className="h-4 w-4 bg-purple-500 rounded-full"></div>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">Books just don't offer practical solutions.</h3>
              <p className="text-gray-700">
                Remember when you learned to ride a bike just by reading? Yeah, we don't either.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;
