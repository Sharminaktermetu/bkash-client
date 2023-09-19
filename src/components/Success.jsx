

const Success = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Make it full height
      }}
    >
      {/* You can replace this SVG with your own */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginBottom: '20px' }}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8 L10 16 L8 14" />
      </svg>
      
      <p className="text-3xl text-yellow-300">Your action was successful!!!</p>
      <h2 style={{ color: 'white', fontSize: '24px' }}>Great to our next...</h2>
    </div>
  );
};

export default Success;
