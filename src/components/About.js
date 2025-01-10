import Head from "next/head";

const About = () => {
  return (
    <div className="bg-[#424242] py-8 md:py-16">
      <Head>
        <title>
          E3000 Hydronic Heater - Ground Thawing and Concrete Curing
        </title>
        <meta
          name="description"
          content="The E3000 Hydronic Heater is designed for efficient ground thawing and concrete curing in cold weather conditions, ensuring smooth construction operations."
        />
      </Head>
      <div className="container mx-auto px-4 md:px-16">
        <div className="max-w-5xl">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-1">
            E3000 Hydronic Heater
          </h1>

          <h2 className="text-[#FF4001] text-2xl md:text-5xl mb-4 md:mb-8 max-w-6xl leading-tight">
            Unmatched Performance in Ground Thawing and Concrete Curing
          </h2>

          <p className="text-white text-base md:text-lg font-normal leading-relaxed max-w-6xl">
            The E3000 Hydronic Heater from Wacker Neuson is your premier
            solution for efficient and effective ground thawing and concrete
            curing during the colder months. Designed to handle the toughest
            conditions, this heater ensures that your construction projects
            continue smoothly, regardless of freezing temperatures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
