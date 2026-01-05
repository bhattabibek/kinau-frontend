const ParallaxSection = () => {
  return (
    <div>
      {/* Parallax Section */}
      <div
        className="h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/assets/parallax.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-lg text-white text-center">
          <h1 className="text-4xl font-bold mb-3">Explore the Store</h1>
          <p className="text-lg">Best Price, Best Deals</p>
          <button className="border-2 p-2 mt-4">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
