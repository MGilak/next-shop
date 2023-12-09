const Grouping = ({ data }) => {
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="justify_center font-800 text-[22px]">
          <h1>خرید بر اساس دسته‌بندی</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mt-10">
          {data.map((item) => (
            <div className="w-[15%] justify_center flex-col gap-3 cursor-pointer">
              <img className="w-[80%]" src={item.url} alt={item.name} />
              <span className="text-sm font-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grouping;
