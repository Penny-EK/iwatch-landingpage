import Image from "next/image";

const ColorSelector = ({ image, alt = "Watch color option", onClick, isSelected = false }) => {
  return (
    <article className={`preview ${isSelected ? "selected" : ""}`} onClick={onClick} style={{ cursor: "pointer" }}>
      <Image src={`/${image}.png`} alt={alt} width={90} height={90} />
    </article>
  );
};

export default ColorSelector;
