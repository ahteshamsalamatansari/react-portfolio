const Education = ({ evalues, key }) => {
  const { year, role, university, description } = evalues;
  return (
    <div>
      <div className="mb-8 flex flex-wrap  lg:justify-center">
        <div className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-neutral-400">{year}</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold ">
            {role} -{" "}
            <span className="text-sm text-purple-100">{university}</span>
          </h6>
          <p className="mb-4 text-neutral-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
