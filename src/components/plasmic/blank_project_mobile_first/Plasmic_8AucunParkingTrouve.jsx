// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 98sZpX3o3cqNhorsdtcuRP
// Component: b0txedwpKL
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: Lqi7nqTyENV/component
import Button from "../../Button"; // plasmic-import: pCdDmYaj73Q/component
import { useScreenVariants as useScreenVariants_9Br8OmEmlKp } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 9Br8OmEMLKp/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: 98sZpX3o3cqNhorsdtcuRP/projectcss
import sty from "./Plasmic_8AucunParkingTrouve.module.css"; // plasmic-import: b0txedwpKL/css
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: TnFkSADxSI7/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: sv2b0scVJAK/icon
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: 8R8e7nHTx/icon
import GeosvgIcon from "./icons/PlasmicIcon__Geosvg"; // plasmic-import: m3jK-J1WY/icon
import ClockHistorysvgIcon from "./icons/PlasmicIcon__ClockHistorysvg"; // plasmic-import: 3jSeOuvz6/icon
import ListsvgIcon from "./icons/PlasmicIcon__Listsvg"; // plasmic-import: xFxMcfslv/icon
import Starsvg2Icon from "./icons/PlasmicIcon__Starsvg2"; // plasmic-import: sIXlj-e3g/icon

export const Plasmic_8AucunParkingTrouve__VariantProps = new Array();

export const Plasmic_8AucunParkingTrouve__ArgProps = new Array();

function Plasmic_8AucunParkingTrouve__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_9Br8OmEmlKp()
  });

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
          <div
            data-plasmic-name={"listesDesParkings"}
            data-plasmic-override={overrides.listesDesParkings}
            className={classNames(projectcss.all, sty.listesDesParkings)}
          >
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
                    sty.text___9NASk
                  )}
                >
                  {"FreePark"}
                </div>
              </div>
            </div>

            {true ? (
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                aria-label={""}
                aria-labelledby={""}
                className={classNames("__wab_instance", sty.textInput)}
                defaultValue={"23 rue nationale 5900 Lille"}
                endIcon={
                  true ? (
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__oSp62)}
                      role={"img"}
                    />
                  ) : null
                }
                name={""}
                placeholder={""}
                required={false}
                startIcon={
                  true ? (
                    <SearchsvgIcon
                      className={classNames(projectcss.all, sty.svg___9CfaT)}
                      role={"img"}
                    />
                  ) : null
                }
              />
            ) : null}

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__skm1Z
              )}
              href={"/mes-dernieres-recherches"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__umNic
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"   Aucun parking disponible a moins de 2km "}
                  </span>
                  <React.Fragment>{"\n\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{
                      textDecorationLine: "underline",
                      color: "#008B92",
                      fontWeight: 700
                    }}
                  >
                    {"Choisir une distance plus grande "}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            </a>

            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___5Vox2
              )}
              href={"/menu"}
            >
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={"softGreen"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__d5Q2M
                  )}
                >
                  {"Annuler"}
                </div>
              </Button>
            </a>

            <div
              data-plasmic-name={"frame5"}
              data-plasmic-override={overrides.frame5}
              className={classNames(projectcss.all, sty.frame5)}
            >
              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__eB6Xa
                )}
                href={"/mes-dernieres-recherches"}
              >
                <Searchsvg2Icon
                  className={classNames(projectcss.all, sty.svg__dUj4V)}
                  role={"img"}
                />
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__lwUii
                )}
                href={"/ma-position"}
              >
                <GeosvgIcon
                  className={classNames(projectcss.all, sty.svg__eOq0)}
                  role={"img"}
                />
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__otQdK
                )}
                href={"/mes-dernieres-recherches"}
              >
                <ClockHistorysvgIcon
                  className={classNames(projectcss.all, sty.svg__jCva2)}
                  role={"img"}
                />
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__xlmPm
                )}
                href={"/menu"}
              >
                <ListsvgIcon
                  className={classNames(projectcss.all, sty.svg__kHKeP)}
                  role={"img"}
                />
              </a>

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__qX81H
                )}
                href={"/favoris"}
              >
                <Starsvg2Icon
                  className={classNames(projectcss.all, sty.svg__ojJFy)}
                  role={"img"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "listesDesParkings",
    "frame2",
    "freePark",
    "textInput",
    "textbox",
    "button",
    "frame5"
  ],

  listesDesParkings: [
    "listesDesParkings",
    "frame2",
    "freePark",
    "textInput",
    "textbox",
    "button",
    "frame5"
  ],

  frame2: ["frame2", "freePark"],
  freePark: ["freePark"],
  textInput: ["textInput", "textbox"],
  button: ["button"],
  frame5: ["frame5"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: Plasmic_8AucunParkingTrouve__ArgProps,
      internalVariantPropNames: Plasmic_8AucunParkingTrouve__VariantProps
    });

    return Plasmic_8AucunParkingTrouve__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_8AucunParkingTrouve";
  } else {
    func.displayName = `Plasmic_8AucunParkingTrouve.${nodeName}`;
  }
  return func;
}

export const Plasmic_8AucunParkingTrouve = Object.assign(
  // Top-level Plasmic_8AucunParkingTrouve renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listesDesParkings: makeNodeComponent("listesDesParkings"),
    frame2: makeNodeComponent("frame2"),
    freePark: makeNodeComponent("freePark"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    frame5: makeNodeComponent("frame5"),
    // Metadata about props expected for Plasmic_8AucunParkingTrouve
    internalVariantProps: Plasmic_8AucunParkingTrouve__VariantProps,
    internalArgProps: Plasmic_8AucunParkingTrouve__ArgProps
  }
);

export default Plasmic_8AucunParkingTrouve;
/* prettier-ignore-end */
