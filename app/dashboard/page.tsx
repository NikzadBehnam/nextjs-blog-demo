import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const DashbaordRoute = async () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Your Blog Articles</h1>
        <Link className={buttonVariants()} href={"/dashboard/create"}>
          Create Post
        </Link>
      </div>
    </div>
  );
};

export default DashbaordRoute;
