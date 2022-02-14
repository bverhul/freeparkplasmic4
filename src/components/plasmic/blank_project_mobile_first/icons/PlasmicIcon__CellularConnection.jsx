// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CellularConnectionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 12"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.667 1.667a1 1 0 00-1-1h-1a1 1 0 00-1 1v8.666a1 1 0 001 1h1a1 1 0 001-1V1.667zM11 3h1a1 1 0 011 1v6.333a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1zM7.333 5.333h-1a1 1 0 00-1 1v4a1 1 0 001 1h1a1 1 0 001-1v-4a1 1 0 00-1-1zm-3.666 3a1 1 0 00-1-1h-1a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 001-1v-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CellularConnectionIcon;
/* prettier-ignore-end */
