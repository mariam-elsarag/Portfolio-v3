import SectionHeader from "./SectionHeader";
const myTechnology = [
  {
    id: 0,
    image: "/technology/html.svg",
    alt: "html logo",
  },
  { id: 1, image: "/technology/css.svg", alt: "css logo" },
  { id: 2, image: "/technology/js.svg", alt: "js logo" },
  { id: 3, image: "/technology/react.svg", alt: "react logo" },
  { id: 4, image: "/technology/redux.svg", alt: "redux logo" },
  { id: 5, image: "/technology/bootstrap.svg", alt: "bootstrap logo" },
  { id: 6, image: "/technology/tailwind.svg", alt: "tailwind logo" },
  { id: 7, image: "/technology/sass.svg", alt: "sass logo" },
];
const Stack = () => {
  return (
    <div id="tech_stack" className="section_container py-10 sm:py-16">
      <SectionHeader
        title="My Tech Stack"
        text=" Technologies I’ve been working with recently"
      />
      <div className="flex flex-wrap items-center justify-center gap-10">
        {myTechnology.map((item) => (
          <img
            className="w-[75px]"
            key={item.id}
            src={item.image}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
