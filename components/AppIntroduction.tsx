import Image from 'next/image';

const AppIntroduction = () => {
  return (
    <section className="bg-[#FFF5EE] py-12 relative">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <p className="text-lg text-gray-500 mb-2">Built out of frustration</p>
          <h2 className="text-4xl font-bold mb-4">Meet the ahead app</h2>
          <div className="relative left-0 top-0">
            <Image src="/images/logo2.png" alt="Ghost" width={400} height={400} />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg text-gray-700 mb-4">
            A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
          </p>
          <p className="text-lg text-gray-700">
            Think of it as a pocket cheerleader towards a better, more fulfilling life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppIntroduction;
