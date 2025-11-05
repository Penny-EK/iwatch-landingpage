import Image from "next/image";

const ColorSelector = ({
  image,
  alt = "Watch color option",
  onClick,
  isSelected = false,
}) => {
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
    <article
      className={`preview ${isSelected ? "selected" : ""} grid grid-rows-3 justify-center overflow-hidden rounded-lg`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Image
        className="z-10 col-end-1 row-[1/3]"
        src={`/${image}.png`}
        alt={alt}
        width={90}
        height={90}
      />
      <div
        className={`col-end-1 row-[2/4] h-2/3 w-full rounded-lg ${getBackgroundColor(image)}`}
      ></div>
    </article>
  );
};

export default ColorSelector;
