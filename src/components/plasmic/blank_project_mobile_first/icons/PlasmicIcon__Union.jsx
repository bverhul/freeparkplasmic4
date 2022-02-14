// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UnionIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
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
          "M1.914 4.354L4.561 7l-.707.707-3.5-3.5L0 3.854.354 3.5l3.5-3.5.707.707-2.647 2.647h3.793c3.576 0 6.5 2.923 6.5 6.5v1.5h-1v-1.5c0-3.024-2.476-5.5-5.5-5.5H1.914z"
        }
        fill={"currentColor"}
        fillOpacity={".8"}
      ></path>
    </svg>
  );
}

export default UnionIcon;
/* prettier-ignore-end */
