const ConfirmDeleteModal = ({ visible, onClose, onConfirm }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-5 shadow-md w-70 text-center">
        {/* Text */}
        <h2 className="text-base  text-gray-800">
          Are you sure you want to delete?
        </h2>

        {/* Buttons */}
        <div className="flex justify-center space-x-3 mt-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1.5 bg-red-500 text-white text-sm rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export { ConfirmDeleteModal };
