import { useEffect, useState } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      console.log("📦 beforeinstallprompt event fired");
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted install");
      } else {
        console.log("User dismissed install");
      }
      setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <div className="bg-black text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-4">
        <div className="text-sm">Install Spenzai for quick access?</div>
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
