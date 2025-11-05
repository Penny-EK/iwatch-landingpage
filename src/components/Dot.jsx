const Dot = ({ color, onClick, isSelected = false }) => {
  const getBackgroundColor = (color) => {
    switch (color) {
      case "navy":
        return "bg-[#404354]";
      case "mint":
        return "bg-[#58d7c4]";
      case "ocean":
        return "bg-[#f2cec6]";
      default:
        return "bg-[#404354]";
    }
  };

  return (
    <div
      className={`h-[30px] w-[30px] rounded-[50%] ${getBackgroundColor(color)} cursor-pointer ${
        isSelected
          ? "border-[3px] border-white shadow-[0_3px_4px_0_rgba(0,0,0,0.2)]"
          : "border border-white"
      }`}
      onClick={onClick}
    ></div>
  );
};

export default Dot;
