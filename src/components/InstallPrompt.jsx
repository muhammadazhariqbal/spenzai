import React, { useEffect, useState } from "react";

const isIos = () =>
  /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());

const isInStandaloneMode = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  window.navigator.standalone === true;

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showAndroidPrompt, setShowAndroidPrompt] = useState(false);
  const [showIosPrompt, setShowIosPrompt] = useState(false);

  useEffect(() => {
    if (isIos()) {
      if (!isInStandaloneMode()) {
        setShowIosPrompt(true);
      }
    } else {
      const handler = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowAndroidPrompt(true);
      };
      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("beforeinstallprompt", handler);
    }
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setShowAndroidPrompt(false);
      setDeferredPrompt(null);
    }
  };

  if (!showAndroidPrompt && !showIosPrompt) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-4">
      <div className="bg-black text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-4 max-w-md w-full">
        <div className="text-sm">
          Install Spenzai: Tap <span className=" ">Share</span> →{" "}
          <span className=" ">Add to Home Screen</span>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
