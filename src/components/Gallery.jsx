"use client";

import { useState } from "react";
import Preview from "./Preview";
import ColorSelector from "./ColorSelector";
import Dot from "./Dot";

const Gallery = () => {
  const [selectedColor, setSelectedColor] = useState("navy");

  return (
    <article>
      <div className="grid grid-cols-[12fr_1fr]">
        <Preview selectedColor={selectedColor} />
        <div className="flex flex-col justify-center gap-5">
          <Dot
            color="navy"
            onClick={() => setSelectedColor("navy")}
            isSelected={selectedColor === "navy"}
          />
          <Dot
            color="mint"
            onClick={() => setSelectedColor("mint")}
            isSelected={selectedColor === "mint"}
          />
          <Dot
            color="ocean"
            onClick={() => setSelectedColor("ocean")}
            isSelected={selectedColor === "ocean"}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 py-7">
        <ColorSelector
          image="navy"
          onClick={() => setSelectedColor("navy")}
          isSelected={selectedColor === "navy"}
        />
        <ColorSelector
          image="mint"
          onClick={() => setSelectedColor("mint")}
          isSelected={selectedColor === "mint"}
        />
        <ColorSelector
          image="ocean"
          onClick={() => setSelectedColor("ocean")}
          isSelected={selectedColor === "ocean"}
        />
      </div>
    </article>
  );
};

export default Gallery;
