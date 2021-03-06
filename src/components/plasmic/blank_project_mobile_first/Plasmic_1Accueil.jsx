// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 98sZpX3o3cqNhorsdtcuRP
// Component: -q_QBvGl5y
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: 98sZpX3o3cqNhorsdtcuRP/projectcss
import sty from "./Plasmic_1Accueil.module.css"; // plasmic-import: -q_QBvGl5y/css

export const Plasmic_1Accueil__VariantProps = new Array();

export const Plasmic_1Accueil__ArgProps = new Array();

function Plasmic_1Accueil__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <a
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root
          )}
          href={"/register"}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            {true ? (
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FFFFFF" }}
                  >
                    {"Freepark"}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ) : null}
          </div>
        </a>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: Plasmic_1Accueil__ArgProps,
      internalVariantPropNames: Plasmic_1Accueil__VariantProps
    });

    return Plasmic_1Accueil__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_1Accueil";
  } else {
    func.displayName = `Plasmic_1Accueil.${nodeName}`;
  }
  return func;
}

export const Plasmic_1Accueil = Object.assign(
  // Top-level Plasmic_1Accueil renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for Plasmic_1Accueil
    internalVariantProps: Plasmic_1Accueil__VariantProps,
    internalArgProps: Plasmic_1Accueil__ArgProps
  }
);

export default Plasmic_1Accueil;
/* prettier-ignore-end */
