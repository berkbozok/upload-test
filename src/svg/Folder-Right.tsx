import React, { CSSProperties } from "react";

interface RightFolderIconProps {
  style?: CSSProperties;
}

const RightFolderIcon: React.FC<RightFolderIconProps> = ({ style }) => {
  return (
    <div className="right-folder" style={style}>
      <svg
        width="125px"
        height="155px"
        viewBox="0 0 127 156"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Right Folder</title>
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
            transform="translate(-1080.000000, -284.000000)"
            fill="#FFFFFF"
            stroke="#B5BFD2"
          >
            <g id="Drop-Zone" transform="translate(600.000000, 180.000000)">
              <g
                id="DragNDrop-Image"
                transform="translate(258.474719, 85.000000)"
              >
                <path
                  d="M335.474005,173.614341 L226.393434,173.619126 C225.426753,173.618394 224.551595,173.226177 223.918123,172.592463 C223.284808,171.958906 222.893062,171.083956 222.892999,170.117534 L222.890935,23.0916785 C222.890935,22.1568325 223.257388,21.3075687 223.854539,20.679781 C224.452042,20.051624 225.280446,19.6450247 226.203827,19.5965199 L335.284398,19.5917345 C336.251079,19.5924663 337.126237,19.9846835 337.759709,20.6183977 C338.393024,21.2519551 338.78477,22.1269047 338.784833,23.0933267 L338.784903,28.0922729 C338.784922,29.4456981 339.394095,30.727238 340.443624,31.5817845 L346.207406,36.2747676 C347.023704,36.9394132 347.497988,37.9361454 347.497988,38.9888252 L347.497988,72.1257402 C347.497988,73.0463043 347.135338,73.929812 346.488554,74.5848771 L340.083534,81.0719063 C339.251958,81.9141305 338.785675,83.0500648 338.785691,84.2336447 L338.786897,170.119215 C338.786958,171.054031 338.420519,171.903268 337.82338,172.531043 C337.225857,173.159221 336.397407,173.565835 335.474005,173.614341 Z"
                  id="Right-Folder"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RightFolderIcon;
