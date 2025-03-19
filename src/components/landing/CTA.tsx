import { Button } from "../ui/Button";

export default function CTA() {
  return (
    <div className="my-16 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Spot Your Dream Team?
      </h2>
      <p className="text-gray-400 mb-8">
        Join Spot today and transform the way you collaborate for events.
      </p>
      <Button className="bg-blue-500 text-white px-8 py-4 text-lg rounded-lg">
        Get Started Now
      </Button>
    </div>
  );
}
