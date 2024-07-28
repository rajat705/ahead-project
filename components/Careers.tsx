import React from 'react';

const Careers = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-16">
        <h1 className="text-3xl font-bold mb-8">Open vacancies</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-[#FFFAF0] p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Senior Full-Stack Engineer</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€65-85k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
          <div className="bg-[#FFFAF0] p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Senior Designer</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€40-55k, 0.25-0.50% equity share options</li>
            </ul>
          </div>
          <div className="bg-[#FFFAF0] p-8 rounded-lg shadow-lg w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Superstar Intern</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€20-24k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
