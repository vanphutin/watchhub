import React from "react";
import { Actor } from "../../../interfaces/MoiveDetail";
import "./_castList.scss";
interface CastListProps {
  actors: Actor[];
}

const CastList: React.FC<CastListProps> = ({ actors }) => {
  return (
    <>
      <ul>
        {actors &&
          actors.map((actor, index) => (
            <li className="color-text" key={index}>
              {typeof actor === "string" ? actor + ", " : actor.name + ", "}
            </li>
          ))}
      </ul>
    </>
  );
};

export default CastList;
