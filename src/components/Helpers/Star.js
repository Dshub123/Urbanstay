import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar 
            className="icon" 
            style={{ fontSize:"2rem",
                    color: "orange"}}/>
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" 
          style={{ fontSize:"2rem",
          color: "orange"}}/>
        ) : (
          <AiOutlineStar className="icon"
          style={{ fontSize:"2rem",
          color: "orange"}}/>
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div 
        className="icon-style" 
        style={{ display: "flex",
                gap: "0.2rem",
                alignItems: "center",
                justifyContent: "flex-start"}}>
        {ratingStar}
        <p style={{margin: "0",
      paddingLeft: "1.2rem"}}>
          ({reviews} customer reviews)
        </p>
      </div>
    </Wrapper>
  );
};


export default Star;
