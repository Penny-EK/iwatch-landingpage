import Image from "next/image";

const Preview = ({ selectedColor = "navy" }) => {
  return (
    <article>
      <Image src={`/${selectedColor}.png`} alt={`Apple Watch in ${selectedColor} color`} width={486} height={486} />
    </article>
  );
};

export default Preview;
