// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 98sZpX3o3cqNhorsdtcuRP
// Component: mLhateqyPc
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: 98sZpX3o3cqNhorsdtcuRP/projectcss
import sty from "./Plasmic_3Login.module.css"; // plasmic-import: mLhateqyPc/css

export const Plasmic_3Login__VariantProps = new Array();

export const Plasmic_3Login__ArgProps = new Array();

function Plasmic_3Login__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__z0Yb
              )}
              href={"/mes-dernieres-recherches"}
            >
              <div
                data-plasmic-name={"login"}
                data-plasmic-override={overrides.login}
                className={classNames(projectcss.all, sty.login)}
              >
                <div
                  data-plasmic-name={"frame1"}
                  data-plasmic-override={overrides.frame1}
                  className={classNames(projectcss.all, sty.frame1)}
                >
                  <div
                    data-plasmic-name={"seConnecter"}
                    data-plasmic-override={overrides.seConnecter}
                    className={classNames(projectcss.all, sty.seConnecter)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__t4GtN
                      )}
                    >
                      {"Se connecter"}
                    </div>
                  </div>
                </div>

                <div
                  data-plasmic-name={"frame2"}
                  data-plasmic-override={overrides.frame2}
                  className={classNames(projectcss.all, sty.frame2)}
                >
                  <div
                    data-plasmic-name={"freePark"}
                    data-plasmic-override={overrides.freePark}
                    className={classNames(projectcss.all, sty.freePark)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sNn6L
                      )}
                    >
                      {"FreePark"}
                    </div>
                  </div>
                </div>

                <input
                  data-plasmic-name={"passwordInput"}
                  data-plasmic-override={overrides.passwordInput}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.passwordInput
                  )}
                  size={1}
                  type={"password"}
                  value={"Some password"}
                />

                <input
                  data-plasmic-name={"textInput"}
                  data-plasmic-override={
                    overrides.textInput ?? overrides.textbox
                  }
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.textInput
                  )}
                  disabled={false}
                  placeholder={"Some placeholder"}
                  size={1}
                  type={"text"}
                  value={"Email"}
                />

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___4ZzHa
                  )}
                  href={"/register"}
                  target={undefined}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#008B92" }}
                    >
                      {"S'inscrire"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </a>
              </div>
            </a>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "login",
    "frame1",
    "seConnecter",
    "frame2",
    "freePark",
    "passwordInput",
    "textInput",
    "textbox"
  ],

  login: [
    "login",
    "frame1",
    "seConnecter",
    "frame2",
    "freePark",
    "passwordInput",
    "textInput",
    "textbox"
  ],

  frame1: ["frame1", "seConnecter"],
  seConnecter: ["seConnecter"],
  frame2: ["frame2", "freePark"],
  freePark: ["freePark"],
  passwordInput: ["passwordInput"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: Plasmic_3Login__ArgProps,
      internalVariantPropNames: Plasmic_3Login__VariantProps
    });

    return Plasmic_3Login__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_3Login";
  } else {
    func.displayName = `Plasmic_3Login.${nodeName}`;
  }
  return func;
}

export const Plasmic_3Login = Object.assign(
  // Top-level Plasmic_3Login renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    login: makeNodeComponent("login"),
    frame1: makeNodeComponent("frame1"),
    seConnecter: makeNodeComponent("seConnecter"),
    frame2: makeNodeComponent("frame2"),
    freePark: makeNodeComponent("freePark"),
    passwordInput: makeNodeComponent("passwordInput"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for Plasmic_3Login
    internalVariantProps: Plasmic_3Login__VariantProps,
    internalArgProps: Plasmic_3Login__ArgProps
  }
);

export default Plasmic_3Login;
/* prettier-ignore-end */
