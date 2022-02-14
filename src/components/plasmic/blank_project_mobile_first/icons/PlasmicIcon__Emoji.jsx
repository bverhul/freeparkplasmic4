// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EmojiIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
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
          "M13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13S0 20.18 0 13 5.82 0 13 0zm0 1.514c6.343.001 11.485 5.144 11.484 11.487 0 6.343-5.143 11.485-11.486 11.484-6.343 0-11.485-5.142-11.485-11.485A11.486 11.486 0 0113 1.514zM8.887 7.362A1.5 1.5 0 007.37 8.866a1.519 1.519 0 102.593-1.07 1.5 1.5 0 00-1.075-.435zm4.11 14.942c-4.326.134-8.249-3.277-9-7-.13-.899.959-1.117 1.671-.945a25.315 25.315 0 007.332.995 25.328 25.328 0 007.316-.991c.692-.176 1.767.022 1.67.941-.681 3.677-4.625 7.134-8.99 7zm6.111-6.476c-.007.004.222-.071.215-.068-2.056.566-4.18.84-6.15.913-2.706-.097-4.982-.38-6.548-.942-1.135-.338-.917.998-.12 1.407 2.042.93 4.263 1.398 6.669 1.535 2.504-.163 4.881-.784 6.451-1.587.743-.477.89-1.758-.312-1.326-.067.026-.136.046-.205.069zm-1.987-8.466a1.501 1.501 0 00-1.52 1.505 1.52 1.52 0 103.039 0 1.5 1.5 0 00-1.519-1.505z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EmojiIcon;
/* prettier-ignore-end */
