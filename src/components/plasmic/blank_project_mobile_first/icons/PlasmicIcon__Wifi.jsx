// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WifiIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 15"}
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
          "M10.334 3.574a8.77 8.77 0 015.977 2.34.314.314 0 00.435-.003l1.16-1.148a.313.313 0 00-.002-.449C13.672.34 6.995.34 2.764 4.314a.313.313 0 00-.004.449L3.921 5.91c.12.118.314.119.435.003a8.771 8.771 0 015.978-2.34zm-.002 3.725a4.92 4.92 0 013.311 1.282.311.311 0 00.436-.006l1.16-1.177a.326.326 0 00-.005-.463 7.176 7.176 0 00-9.802 0 .326.326 0 00-.004.463l1.16 1.177c.12.12.313.123.436.006a4.921 4.921 0 013.308-1.282zm2.335 2.724a.307.307 0 01-.095.228l-2.015 1.99a.318.318 0 01-.447 0l-2.015-1.99a.307.307 0 01.01-.452 3.508 3.508 0 014.457 0 .308.308 0 01.105.224z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WifiIcon;
/* prettier-ignore-end */
