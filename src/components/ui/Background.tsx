"use client";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-black via-gray-800 to-blue-950">
      {/* Primary dynamic blobs */}
      <div className="blob blob1 absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500 to-teal-500 blur-[140px] opacity-40" />
      <div className="blob blob2 absolute bottom-[10%] right-[20%] h-[450px] w-[450px] rounded-full bg-gradient-to-br from-blue-700 to-purple-600 blur-[130px] opacity-35" />

      {/* Secondary blobs */}
      <div className="blob blob3 absolute top-[50%] left-[40%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 blur-[160px] opacity-25" />
      <div className="blob blob4 absolute top-[20%] right-[10%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-[120px] opacity-20" />
      <div className="blob blob5 absolute top-[70%] right-[30%] h-[250px] w-[250px] rounded-full bg-gradient-to-br from-purple-500 to-pink-400 blur-[110px] opacity-10" />
      <div className="blob blob6 absolute bottom-[15%] left-[25%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 blur-[120px] opacity-12" />
    </div>
  );
}
