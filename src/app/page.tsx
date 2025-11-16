import ExploreBtn from "@/components/ExploreBtn";

export default function Home() {
  return (
    <section className="text-center flex flex-col justify-center items-center mt-8">
      {/* Content */}
      <div className="">
        <h1>
          Forge
          <span className="gradient bg-clip-text text-transparent">
            Community
          </span>
          <br />
          Host Events.
          <br />
          <span className="gradient bg-clip-text text-transparent">
            Connect Tech.
          </span>
        </h1>

        <p className="my-6 max-w-2xl text-lg mx-auto text-muted-foreground">
          Unite developers, designers, and tech enthusiasts through virtual
          events that matter. Build connections, share knowledge, and grow
          together.
        </p>

        <ExploreBtn />
      </div>
    </section>
  );
}
