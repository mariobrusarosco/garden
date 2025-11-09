export default function HomeScreen() {

  return (
    <div data-ui="home-screen" className="container global-x-spacing">
      <section
        data-ui="intro"
        className="mt-6"
      >
        <p className="text-8xl font-sans mt-16 text-midnight-blue font-thin">
          <strong className="text-dark-pink font-semibold">Software Development</strong> collection of notes, tutorials and other stuff.
        </p>

        <p className="text-xl font-serif font-thin mt-14 max-w-[550px] font-thin">
          All based on a <b>Digital Garden</b> concept as a way to share things I&apos;m learning and struggling.
          Definitely not a way to organize my Notion.
        </p>

        <p className="text font-sans font-thin mt-4">
          Nope. Everything is fine over there.
        </p>
      </section>

      <section
        data-ui="self-promotion-area"
        className="mt-14 lg:col-start-2 lg:col-end-3 lg:row-start-1  lg:mt-0"
      >

      </section>
    </div>
  );
}
