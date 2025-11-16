import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import events from "@/lib/constants";
import { cacheLife } from "next/cache";

async function page() {
  "use cache";
  cacheLife("hours");
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`
  // );
  // const { events } = await response.json();

  return (
    <section className="mt-20 space-y-7 px-8">
      <h3>Discover Event</h3>

      <p>Find and register for amazing events happening near you</p>

      <ul className="events">
        {events &&
          events.length > 0 &&
          events.map((event: IEvent) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default page;
