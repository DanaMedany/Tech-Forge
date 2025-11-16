import EventDetails from "@/components/EventDetails";
import { Suspense } from "react";

async function EventDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = params.then((p) => p.slug);
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <EventDetails params={slug} />
    </Suspense>
  </main>;
}

export default EventDetailsPage;
