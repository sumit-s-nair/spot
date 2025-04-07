import {
  Users,
  MessageCircle,
  Calendar,
  CheckCircle,
  Shield,
  ClipboardList,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Easy Team Building",
      description: "Swipe to connect with potential teammates effortlessly.",
      icon: <Users className="text-blue-400 mx-auto" size={40} />,
    },
    {
      title: "Built-in Chat System",
      description: "Communicate and collaborate in real-time with your team.",
      icon: <MessageCircle className="text-blue-400 mx-auto" size={40} />,
    },
    {
      title: "Seamless Event Management",
      description: "Submit forms and track event progress directly from the app.",
      icon: <Calendar className="text-blue-400 mx-auto" size={40} />,
    },
    {
      title: "Secure University Email Verification",
      description: "Verify your identity with your university email.",
      icon: <Shield className="text-blue-400 mx-auto" size={40} />,
    },
    {
      title: "Streamlined Team Application Reviews",
      description: "Easily review and manage team applications.",
      icon: <ClipboardList className="text-blue-400 mx-auto" size={40} />,
    },
    {
      title: "Direct Communication with Teams",
      description: "Communicate directly with teams for better coordination.",
      icon: <CheckCircle className="text-blue-400 mx-auto" size={40} />,
    },
  ];

  return (
    <section className="py-16 px-6 backdrop-blur-md bg-black/20 p-8 rounded-2xl shadow-lg mx-auto w-full max-w-6xl transition-opacity duration-1000 opacity-100">
      <h2 className="text-4xl font-extrabold text-center text-white">
        Why Choose Spot?
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-black/10 backdrop-blur-lg shadow-lg text-center transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-4 text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
