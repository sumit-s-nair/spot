import { Bell, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      <section className="py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-white">
          How It Works
        </h2>
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "Step 1",
              title: "Sign Up",
              description: "Create your profile with your university email.",
            },
            {
              step: "Step 2",
              title: "Join Events",
              description: "Browse events and join lobbies to find teammates.",
            },
            {
              step: "Step 3",
              title: "Collaborate",
              description:
                "Chat, swipe, and build a winning team for the event.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-black/20 backdrop-blur-lg shadow-lg text-center"
            >
              <h3 className="text-lg font-bold text-blue-400">{item.step}</h3>
              <h4 className="text-2xl font-extrabold text-white mt-2">
                {item.title}
              </h4>
              <p className="mt-4 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-6 mx-auto bg-black/20 text-white rounded-2xl shadow-lg backdrop-blur-md max-w-7xl mb-16">
        <header className="bg-gray-800/50 backdrop-blur-md shadow-lg rounded-lg mb-8 p-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/favicon.ico"
              alt="Spot Logo"
              className="w-10 h-10"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold">Spot</h1>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-4 py-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="hidden md:flex gap-4">
              <button className="relative">
                <Mail className="text-gray-300" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button>
                <Bell className="text-gray-300" />
              </button>
            </div>
            <Image
              src="/favicon.ico"
              alt="Profile"
              className=" hidden md:block w-10 h-10 rounded-full border-2 border-blue-500"
              width={40}
              height={40}
            />
          </div>
        </header>

        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col-reverse  md:flex-row justify-between mb-8 gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-4xl font-extrabold">
                My Dashboard
              </h1>
              <p className="text-gray-400">Welcome back, Thomas Gepsan</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/favicon.ico"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-blue-500"
                width={48}
                height={48}
              />
              <div>
                <p className="font-bold">Thomas Gepsan</p>
                <p className="text-gray-400 text-sm">Super Admin</p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="flex gap-6 mb-8 overflow-hidden ">
            {["Overview", "Events", "Upcoming", "Reports"].map((tab, idx) => (
              <button
                key={idx}
                className={`py-2 px-4 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
                  idx === 0
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Events Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["Hackathon 2025", "Design Sprint", "AI Workshop"].map(
                  (event, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-black/20 rounded-2xl shadow-lg backdrop-blur-md"
                    >
                      <h3 className="text-lg font-bold text-white">{event}</h3>
                      <p className="text-gray-400">Team size: 5-7</p>
                      <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                        Join Lobby
                      </Button>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Calendar Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Calendar</h2>
              <div className="p-6 bg-black/10 rounded-2xl shadow-lg backdrop-blur-md">
                <p className="text-center text-gray-400 mb-4">February 2025</p>
                <div className="grid grid-cols-7 gap-2 text-white text-center">
                  {"SMTWTFS".split("").map((day, idx) => (
                    <div
                      key={idx}
                      className="text-gray-400 font-bold text-sm uppercase"
                    >
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                        [5, 12, 20].includes(idx + 1)
                          ? "bg-blue-500 text-white"
                          : idx % 7 === 0 || idx % 7 === 6
                          ? "bg-gray-700 text-gray-200"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
