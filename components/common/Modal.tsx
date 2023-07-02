import { useEffect } from 'react';

import Alpine from 'alpinejs';

const Modal = () => {
  useEffect(() => {
    Alpine.start(); // Initialize Alpine.js when the component mounts
  }, []);

  return (
    <div>
      {/* Trigger button */}
      <button
        x-data="{ open: false }"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={(event) => {
          // Set the `open` property to `true` on click
          event.target.dispatchEvent(new CustomEvent('x-data:update', {
            detail: { open: true },
            bubbles: true,
          }));
        }}
      >
        Open Modal
      </button>

      {/* Modal */}
      <div x-data="{ open: false }" x-show="open" className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Modal Title</h2>
            <p>Modal content goes here...</p>
            <button
              onClick={(event) => {
                // Set the `open` property to `false` on click
                event.target.dispatchEvent(new CustomEvent('x-data:update', {
                  detail: { open: false },
                  bubbles: true,
                }));
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
