const LoadingPage = () => {
  return (
    <div className="top-0 fixed h-screen w-screen bg-opacity-30 bg-gray-600 flex items-center justify-center z-[100]">
      <span className="loading loading-ball loading-xs bg-orange_primary"></span>
      <span className="loading loading-ball loading-sm bg-orange_primary"></span>
      <span className="loading loading-ball loading-md bg-orange_primary"></span>
      <span className="loading loading-ball loading-lg bg-orange_primary"></span>
    </div>
  );
};

export default LoadingPage;
