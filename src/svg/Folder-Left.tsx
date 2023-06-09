import React, { CSSProperties } from "react";

interface LeftFoldertIconProps {
  style?: CSSProperties;
}

const LeftFoldertIcon: React.FC<LeftFoldertIconProps> = ({ style }) => {
  return (
    <div className="left-folder" style={style}>
      <svg
        width="125px"
        height="155px"
        viewBox="0 0 115 155"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Left Document</title>
        <desc>Created with Sketch.</desc>
        <g
          id="Quarterly-Report-Dropbox"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Static"
            transform="translate(-870.000000, -283.000000)"
            fill="#FFFFFF"
            stroke="#B5BFD2"
          >
            <g id="Drop-Zone" transform="translate(600.000000, 180.000000)">
              <g
                id="DragNDrop-Image"
                transform="translate(270.474719, 91.000000)"
              >
                <path
                  d="M112.297969,166.423646 L2.15098525,166.38973 C1.73670587,166.389067 1.36167736,166.220811 1.0900441,165.949178 C0.818410838,165.677544 0.650154642,165.302516 0.649491742,164.888864 L0.597229691,14.0707039 C0.596600821,13.6770797 0.747890454,13.3188146 0.995810754,13.0512488 C1.24195727,12.7855974 1.58323157,12.6091074 1.96565436,12.5763539 L112.112638,12.61027 C112.526918,12.6109333 112.901946,12.7791893 113.173579,13.0508225 C113.445213,13.3224556 113.613469,13.6974841 113.614132,14.1111359 L113.666394,164.929296 C113.667023,165.32292 113.515733,165.681185 113.267813,165.948751 C113.021666,166.214403 112.680392,166.390893 112.297969,166.423646 Z"
                  id="Left-Document"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LeftFoldertIcon;
