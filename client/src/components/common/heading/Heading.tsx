import React from "react";
import "./_heading.scss";
import { SiNextra } from "react-icons/si";

interface HeadingProps {
  className: string;
  context: string;
  contextSub?: string;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  context,
  contextSub,
}) => {
  return (
    <>
      <div className="heading ">
        <h1 className={`context ${className}`}>
          <span className="icon">
            <SiNextra />
          </span>{" "}
          {context}
        </h1>
        {contextSub && (
          <h3 className={`context-sub ${className}`}>{contextSub}</h3>
        )}
      </div>
      <hr style={{ margin: "0px 0px 30px 0px " }} />
    </>
  );
};

export default Heading;
