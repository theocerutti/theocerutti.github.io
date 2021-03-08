import React from "react";
import ReactTooltip from "react-tooltip";
import { v4 as uuidv4 } from "uuid";
import "./MultiProgressBar.scss";

const MultiProgressBar = ({ data, showLegends, renderLegends, className }) => {
  return (
    <div className={`multi-progress-bar ${className}`}>
      { data && data.length !== 0 ?
        <div className="bars">
          {
            data.map((item, i) => {
              if (item.value > 0) {
                const uuid = uuidv4();
                return (
                  <a data-tip
                     data-for={ `multi-progress-bar-tooltip-${ uuid }` }
                     className="bar"
                     style={ { "backgroundColor": item.color, "width": item.value + "%" } }
                  >
                    <ReactTooltip
                      effect="solid"
                      id={ `multi-progress-bar-tooltip-${ uuid }` }
                    >
                      { renderLegends ? renderLegends(item, i) :
                        <>
                          <span className="dot" style={ { "color": item.color } }>●</span>
                          { item.value }%
                        </>
                      }
                    </ReactTooltip>
                  </a>
                );
              }
              return null;
            })
          }
        </div> : null
      }
      { data && data.length !== 0 && showLegends ?
        <div className="legends">
          {
            data.map(item => {
              if (item.value > 0) {
                return (
                  <div key={ uuidv4() } className="legend">
                    <span className="dot" style={ { "color": item.color } }>●</span>
                    <span className="label">{ item.name }</span>
                  </div>
                );
              }
              return null;
            })
          }
        </div> : null
      }
    </div>
  );
};

export default MultiProgressBar;