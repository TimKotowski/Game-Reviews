import React from "react";

const ListofReviews = (props) => {
  const { reviews } = props;
  return (
    <div className="flex flex-row flex-wrap">
      {reviews.map((review) => (
        <div
          key={review.id}
          className=" bg-gray-100 item-center mt-10 w-1/5 p-2 rounded shadow-xl"
        >
          <h4>{review.rating}</h4>
          <h4>{review.content}</h4>
        </div>
      ))}
    </div>
  );
};
export default ListofReviews;
