import { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    setIsInstalled(standalone);

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("User choice:", outcome);
    } else {
      alert("App is already installed or install not available.");
    }
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <div className="bg-black text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-4">
        <div className="text-sm">
          {isInstalled
            ? "App already installed"
            : "Install Spenzai for quick access?"}
        </div>
        <button
          onClick={handleInstall}
          className="bg-white text-black text-sm font-semibold px-3 py-1 rounded"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
