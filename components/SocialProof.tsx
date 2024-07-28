const SocialProof = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ever wondered what others think of you?</h2>
          <p className="mb-6">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
          <div className="flex justify-around">
            <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Anonymous ratings</h3>
              <p>Your friends and family can rate you anonymously.</p>
            </div>
            <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Receive feedback</h3>
              <p>Receive feedback on how you can improve your social skills.</p>
            </div>
            <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Track progress</h3>
              <p>Track your progress over time and see how you've improved.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SocialProof;
  