import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
      className="text-sm font-semibold leading-6 "
       onClick={() => setIsOpen(true)}
      >
        Login &rarr;
      </button>

      {/* Modal */}
      <div
      onClick={() => setIsOpen(false)}
      className={ isOpen ? "fixed z-10 inset-0 overflow-y-auto text-black" : "hidden "}>
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-6 z-50 w-80 h-80">
            <div className="mb-3 flex justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="">
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-col justify-center h-full">
                <p>Login is currently unavailable</p>
                <span className="text-teal-500">Click anywhere to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


