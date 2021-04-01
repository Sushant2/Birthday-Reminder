import React from "react";

const List = ({ info }) => {
  return (
    <>
      {info.map((inf) => {
        const {id, name, age, image } = inf;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
