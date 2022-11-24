import { FC } from "react";
import { Hearts, Oval, Puff } from "react-loader-spinner";

interface LoaderProps {
  type: "oval" | "heaars" | "puff";
  color: string;
  height: string;
  width: string;
}

export const Loader: FC<LoaderProps> = ({ type, color, height, width }) => {
  return (
    <>
      {type === "heaars" && (
        <Hearts
          height={height}
          width={width}
          color={color}
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {type === "puff" && (
        <Puff
          height={height}
          width={width}
          radius={1}
          color={color}
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {type === "oval" && (
        <Oval
          height={height}
          width={width}
          color={color}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
    </>
  );
};
