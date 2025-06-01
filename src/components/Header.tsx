import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  showMenuButton = false,
  onMenuClick
}) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-4 shadow-sm">
      <div className="flex items-center">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="mr-3 rounded-full p-1 text-slate-700 hover:bg-slate-100"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
      </div>
      
      {showMenuButton && (
        <button
          onClick={onMenuClick}
          className="rounded-full p-1 text-slate-700 hover:bg-slate-100"
        >
          <MoreVertical size={24} />
        </button>
      )}
    </header>
  );
};

export default Header;