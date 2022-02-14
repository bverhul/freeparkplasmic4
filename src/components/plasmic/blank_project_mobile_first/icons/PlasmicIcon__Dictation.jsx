// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DictationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 25"}
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
          "M0 11.667c0-.627.373-1 1-1 .294 0 .667.373.667 1 0 5.191 1.904 7.666 6 7.666 3.762 0 5.666-2.475 5.666-7.666 0-.627.373-1 1-1 .294 0 .667.373.667 1 0 5.744-2.305 9.014-6.667 9.31v2.356H11.5a.833.833 0 010 1.667h-8a.833.833 0 110-1.667h3.167v-2.378C2.21 20.543 0 17.291 0 11.667zm7.5-10A2.833 2.833 0 004.667 4.5v9a2.833 2.833 0 005.666 0v-9A2.833 2.833 0 007.5 1.667zM7.5 0A4.5 4.5 0 0112 4.5v9a4.5 4.5 0 11-9 0v-9A4.5 4.5 0 017.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DictationIcon;
/* prettier-ignore-end */
