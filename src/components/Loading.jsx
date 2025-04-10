import { Loader2 } from "lucide-react";

export default function Loading({ message = "Enhancing Image...", className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center h-full ${className}`}>
      <div className="animate-spin text-blue-600 mb-4">
        <Loader2 className="w-10 h-10" />
      </div>
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
}
