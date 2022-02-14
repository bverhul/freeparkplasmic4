// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BackspaceIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 17"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.443.676h9.812A3.044 3.044 0 0123.3 3.721v9.558a3.044 3.044 0 01-3.044 3.044h-9.812c-.9 0-1.763-.358-2.398-.996l-6.08-6.111a1.015 1.015 0 010-1.432l6.08-6.11a3.382 3.382 0 012.398-.998z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.353"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18.398 5.3a.676.676 0 010 .956l-2.41 2.409 2.41 2.41a.676.676 0 11-.957.956l-2.41-2.41-2.408 2.41a.676.676 0 11-.957-.957l2.41-2.409-2.41-2.41a.676.676 0 11.957-.956l2.409 2.41 2.409-2.41a.676.676 0 01.957 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackspaceIcon;
/* prettier-ignore-end */
