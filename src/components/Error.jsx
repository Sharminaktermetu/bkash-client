const Error = () => {
    const searchData = new URLSearchParams(window.location.search);
    const message = searchData.get('message');
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-red-600 mb-4">Payment Error</h1>
          <p className="text-gray-700 mb-4">{message}</p>
          <a
            href="/"
            className="text-blue-600 hover:underline"
          >
            Go back to the homepage
          </a>
        </div>
      </div>
    );
  };
  
  export default Error;
  