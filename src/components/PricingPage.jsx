import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [plansData, setPlansData] = useState([]);

  useEffect(() => {
    // Fetch plans data from plans.json
    fetch("plans.json")
      .then((response) => response.json())
      .then((data) => {
        setPlansData(data);
      })
      .catch((error) => {
        console.error("Error fetching plans data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-8">Choose a Plan</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        {plansData.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow-lg p-6 rounded-lg m-4 w-72 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-3xl font-semibold mb-4 text-blue-600">৳{plan.price}/month</div>
            <ul className="list-disc list-inside text-left">
              {plan.points.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
              ))}
            </ul>
            <Link to='payment' className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 mt-4">
              Select
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
