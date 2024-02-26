// import { url } from 'inspector';
import React from 'react';

const Dashboard: React.FC = () => {
  const backgroundStyles = {
    backgroundImage: `url(${require('../assests/hero_image.png')})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" style={backgroundStyles} >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Your Dashboard</h2>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Widget 1</h3>
                <p className="mt-1 text-sm text-gray-500">Widget 1</p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Widget 2</h3>
                <p className="mt-1 text-sm text-gray-500">Widget 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
