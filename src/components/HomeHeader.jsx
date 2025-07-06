import { Bell } from "lucide-react"; // You can use heroicons or lucide-react
import helloImg from "../assets/helloIcon.png";

export default function HomeHeader({ name }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-white ">
      {/* Left: Avatar and greeting */}
      <div className="flex items-center space-x-4">
        <img
          src={helloImg}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm text-gray-600">Hello, </p>
          <p className="text-lg font-semibold text-black">Welcome back</p>
        </div>
      </div>

      {/* Right: Notification icon */}
      <div className="relative">
        <Bell className="w-5 h-5 text-gray-700" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
      </div>
    </div>
  );
}
