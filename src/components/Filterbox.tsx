import { Funnel } from "lucide-react";
import Button from "./ui/button";

const Filterbox = () => {
  return (
    <div className="flex items-center justify-end gap-5">
      <Button variant="outline">
        <Funnel />
      </Button>
    </div>
  );
};

export default Filterbox;
