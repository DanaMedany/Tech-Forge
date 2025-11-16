import { CalendarDays, CirclePlus } from "lucide-react";
import Link from "next/link";

function ExploreBtn() {
  return (
    <div className="flex-center space-x-8">
      <div className="flex-center gap-2 gradient p-3 rounded text-white">
        <CalendarDays />
        <button>
          <Link href="/events">Explore Events</Link>
        </button>
      </div>

      <div className="relative p-0.5 rounded-lg gradient">
        <div className="flex-center gap-2 bg-background rounded-lg p-3">
          <CirclePlus />
          <button>Host Your Event</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreBtn;
