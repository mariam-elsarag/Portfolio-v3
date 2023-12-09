const SectionHeader = ({ title, text }) => {
  return (
    <div className="mb-16 text-center ">
      <h2 className="mb-4 font-primary text-3xl font-bold text-headingColor dark:text-white ">
        {title}
      </h2>
      <p className="font-primary text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default SectionHeader;
