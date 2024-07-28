import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-purple-100 py-12">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
          <p className="text-gray-600 mb-2">Ahead app</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Master your life <br></br> by mastering <br></br>emotions
          </h1>
          <div className="flex items-center mb-4">
            <Image src="/images/apple.png" alt="Download on the App Store" width={150} height={50} className="mr-4" />
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <div>
              <p className="text-gray-600 ml-2">100+ AppStore reviews</p>
              </div>

            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image src="/images/image1.png" alt="App preview on a phone" width={550} height={800} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
