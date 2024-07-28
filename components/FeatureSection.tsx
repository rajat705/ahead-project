const FeatureSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold mb-4 lg:mb-0 lg:w-1/4">EQ beats IQ</h2>
          <div className="lg:w-3/4 flex flex-col lg:flex-row justify-between">
            <p className="text-lg text-gray-700 mb-4 lg:mb-0 lg:mr-8">
              People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
            </p>
            <p className="text-lg text-gray-700">
              They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
