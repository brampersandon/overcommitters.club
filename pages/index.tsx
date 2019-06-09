import React from "react";

export default () => (
  <main className="h-screen w-full flex flex-col justify-between bg-indigo-100">
    <Header />
    <CTA />
    <Hero />
    <Footer />
  </main>
);

const Header = () => (
  <header className="container mx-auto max-w-4xl">
    <div>
      <h1 className="lg:text-6xl text-3xl uppercase font-bold text-indigo-100 bg-pink-700 px-1 my-1 inline-block">
        Overcommitters Club
      </h1>
    </div>
    <div>
      <h2 className="lg:text-xl text-sm md:text-md lowercase italic font-bold text-pink-700 bg-indigo-100 px-1 inline-block">
        Don't have time for this? You're in the right place.
      </h2>
    </div>
  </header>
);

const Hero = () => (
  <section className="container mx-auto px-12 py-4 max-w-4xl">
    <FAQ question="what is this?">
      <p className="py-2">
        <span className="uppercase font-bold text-sm text-indigo-100 bg-pink-700 px-1 inline-block">
          Overcommitters Club
        </span>{" "}
        is a monthly "event" for folks like us, who sign up for too many things,
        and need to reclaim that time every once in awhile. We like to think
        we're the only recurring event that's happy when you're a no-show.
      </p>
    </FAQ>
    <FAQ question="do you actually meet up?">
      <p className="py-2">
        <span className="uppercase font-bold text-sm text-indigo-100 bg-pink-700 px-1 inline-block">
          Nope!
        </span>{" "}
        Call a meeting of Overcommitters Club wherever you find yourself! If you're looking for a community to share your successes, or just commisserate with other overcommitters, join our Slack!
      </p>
    </FAQ>
    <FAQ question="What sorts of things can I do with this time?">
      <p className="py-2">
        <span className="uppercase font-bold text-sm text-indigo-100 bg-pink-700 px-1 inline-block">
          Up to you!
        </span>{" "}
        Use it to do whatever you like. Chill out. Answer those boring emails.
        Better yet, unsubscribe from a bunch of mailing lists. It's your time.
        This is just one way to get that time back.
      </p>
    </FAQ>
    <FAQ question="What is skipconf, and how does it relate to Overcommitters Club?">
      <p className="py-2">
        <span className="uppercase font-bold text-sm text-indigo-100 bg-pink-700 px-1 inline-block">They're pals!</span>{" "}
        They're philosophically similar: both pseudo-events aimed at giving people the time and space to focus on things that get put on the back burner. Overcommitters Club and skipconf share an <a className="underline" href="https://twitter.com/brandon_mn">organizer</a> and a Slack workspace (because who needs more Slack workspaces?)
      </p>
    </FAQ>
  </section>
);

const CTA = () => (
  <Centerer>
    <div className="py-4 mt-10 mx-8 lg:mx-0 border-2 border-pink-700 rounded-lg max-w-lg">
      <h3 className="text-center lg:text-4xl text-2xl italic font-bold text-pink-700 lowercase">
        Join the club
      </h3>
      <p className="text-center py-2 px-8 text-md">
        <strong>Next:</strong> June 13, 2019 @ 6:30pm
      </p>
      <p className="py-2 px-8 text-md text-center">
        Take two hours back. Takes place wherever you are.
      </p>
      <div className="text-center">
        <Button label={"Add to calendar"} href="/static/overcommitters-club.ics" />
        <Button label={"Join the Slack"} href="https://join.slack.com/t/skipconf/shared_invite/enQtNjQ4MzIxMjk2ODk5LTIxZGMyN2RmMjUyNTJkZTQxYTM3ZDcyYmJiZjFkNTY4OTFmMGQ1YzY4MDdlZjlhNDY2MGFlN2FmMjBiZTgzNGE" />
      </div>
    </div>
  </Centerer>
);

const FAQ: React.FC<{
  question: string;
}> = ({ question, children }) => (
  <div className="px-4 py-4">
    <h3 className="lg:text-3xl text-lg font-bold bg-indigo-100 text-pink-700 inline-block italic lowercase">
      {question}
    </h3>
    {children}
  </div>
);

const Button: React.FC<{ label: React.ReactNode, href: string }> = ({ label, href }) => (
  <a
    href={href}
    className="px-4 py-2 m-2 bg-pink-700 text-indigo-100 font-bold text-lg rounded lowercase inline-block"
  >
    {label}
  </a>
);

const Centerer: React.FC = ({ children }) => (
  <div className="mx-auto justify-center content-center">
    {children}
  </div>
);

const Footer: React.FC = () => (
  <div className="container mx-auto max-w-4xl">
    <p className="lg:text-md text-sm lowercase italic font-bold text-indigo-100 bg-pink-700 px-1 my-1 inline-block">
      brought to you by your friends at{" "}
      <a className="underline" href="https://www.leftblank.co">
        left blank
      </a>
      .
    </p>
  </div>
);
