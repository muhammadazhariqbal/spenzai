import React, { useState, useRef } from "react";
import { Camera, Image, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const CameraScreen = () => {
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setCapturedImage(reader.result);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setCapturedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUseReceipt = () => {
    if (capturedImage) {
      navigate("/add", { state: { receiptImage: capturedImage } });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white pb-16">
      <Header title="Scan Receipt" showBackButton />

      <main className="flex-1 p-4">
        <div className="mb-4 rounded-lg bg-white p-4 shadow-lg">
          <p className="mb-4 text-center text-slate-600">
            Take a photo of your receipt to automatically extract expense
            details
          </p>

          <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100">
            {capturedImage ? (
              <>
                <img
                  src={capturedImage}
                  alt="Captured receipt"
                  className="h-full w-full object-cover"
                />
                <button
                  onClick={handleClear}
                  className="absolute right-2 top-2 rounded-full bg-slate-800 bg-opacity-70 p-2 text-white"
                >
                  <X size={20} />
                </button>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center">
                <Camera size={48} className="mb-2 text-slate-400" />
                <p className="text-sm text-slate-500">No image captured</p>
              </div>
            )}
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-500">
              {error}
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={handleCapture}
              className="flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700"
            >
              <Camera size={20} className="mr-2" />
              Take Photo
            </button>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700"
            >
              <Image size={20} className="mr-2" />
              Gallery
            </button>
          </div>
        </div>

        {capturedImage && (
          <button onClick={handleUseReceipt} className="btn btn-primary w-full">
            Use Receipt
          </button>
        )}
      </main>

      <Navigation />
    </div>
  );
};

export default CameraScreen;
