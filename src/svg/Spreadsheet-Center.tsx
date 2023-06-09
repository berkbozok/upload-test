import React, { CSSProperties } from "react";

interface CenterSpreadsheetIconProps {
  style?: CSSProperties;
}

const CenterSpreadsheetIcon: React.FC<CenterSpreadsheetIconProps> = ({
  style,
}) => {
  return (
    <div className="middle-folder">
      <svg
        width="124px"
        height="180px"
        viewBox="0 0 124 180"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Center Spreadsheet</title>
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
            transform="translate(-901.000000, -271.000000)"
            stroke="#B5BFD2"
          >
            <g id="Drop-Zone" transform="translate(600.000000, 180.000000)">
              <g
                id="DragNDrop-Image"
                transform="translate(258.474719, 91.000000)"
              >
                <g
                  id="Center-Spreadsheet"
                  transform="translate(42.472962, -0.000000)"
                >
                  <path
                    d="M120.052319,179.5 L4.052319,179.5 C3.08582069,179.5 2.21082069,179.108249 1.57744527,178.474874 C0.944069848,177.841498 0.552319005,176.966498 0.552319005,176 L0.552319005,4 C0.552319005,3.03350169 0.944069848,2.15850169 1.57744527,1.52512627 C2.21082069,0.891750844 3.08582069,0.5 4.052319,0.5 L84.9128183,0.5 C86.512369,0.5 88.0326763,1.19635049 89.0774613,2.40754277 L122.216962,40.8253107 C123.078406,41.8239607 123.552319,43.0989094 123.552319,44.4177679 L123.552319,176 C123.552319,176.966498 123.160568,177.841498 122.527193,178.474874 C121.893817,179.108249 121.018817,179.5 120.052319,179.5 Z"
                    id="Rectangle-Copy-4"
                    fill="#FFFFFF"
                  ></path>
                  <g id="Group-30" transform="translate(25.052319, 74.000000)">
                    <rect
                      id="Rectangle-Copy-9"
                      fill-opacity="0.4"
                      fill="#B5BFD2"
                      x="0.5"
                      y="0.5"
                      width="72"
                      height="59"
                    ></rect>
                    <rect
                      id="Rectangle"
                      fill-opacity="0.4"
                      fill="#B5BFD2"
                      x="0.5"
                      y="0.5"
                      width="19.1103226"
                      height="59"
                    ></rect>
                    <rect
                      id="Rectangle-Copy-10"
                      x="0.5"
                      y="20.5"
                      width="72"
                      height="19"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CenterSpreadsheetIcon;
