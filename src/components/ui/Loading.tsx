import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full text-secondary">
      <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
