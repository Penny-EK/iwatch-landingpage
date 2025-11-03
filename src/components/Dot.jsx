const Dot = ({ color, onClick, isSelected = false }) => {
  return <div className={`colorVariant ${color} ${isSelected ? "active" : ""}`} onClick={onClick} style={{ cursor: "pointer" }}></div>;
};

export default Dot;
