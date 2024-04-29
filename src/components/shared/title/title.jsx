const Title = ({title,subTitle}) => {
  return (
    <div className="mb-4">
      <h2 className="relative w-min uppercase text-blue-500/50 font-bold after:h-1 after:w-8 after:bg-blue-500/50 after:absolute after:-right-[50%] after:top-1/2 after:-translate-y-1/2">
        {title}
      </h2>
      <h3 className="uppercase text-blue-500 font-bold text-2xl">
        {subTitle}
      </h3>
    </div>
  );
};

export default Title;
