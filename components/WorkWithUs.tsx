import Image from 'next/image';

const WorkWithUs = () => {
  return (
    <section className="bg-[#F5F3FF] py-12 px-4 md:px-16 rounded-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold">Work with us</h1>
          <Image src="/images/ahead.png" alt="ahead logo" width={100} height={40} />
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Image src="/images/emoji.png" alt="Ghost" width={40} height={40} />
              <h2 className="text-2xl font-bold ml-4">About</h2>
            </div>
            <p className="text-gray-700 mb-8">
              At ahead our goal is to make self-improvement fun and lasting. We know there’s a way how to make it work. And that’s what aHead is all about!
            </p>
            <div className="bg-[#FFFAF0] p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Product</h3>
              <p className="text-gray-700">
                Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
              </p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8 flex flex-col space-y-4">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Power through, even when the going gets tough</h3>
              <p className="text-gray-700">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Learn more about who you are and where you want to go</h3>
              <p className="text-gray-700">
                We ask the right questions to help you better understand why you do things the way you do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Play and grow together with others on the same journey</h3>
              <p className="text-gray-700">
                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
