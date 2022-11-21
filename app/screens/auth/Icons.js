import React from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

const Envelope = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    stroke={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.621 6.516s-2.675 3.21-4.632 3.21c-1.955 0-4.66-3.21-4.66-3.21"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M1.043 8.974c0-5.698 1.985-7.597 7.937-7.597s7.936 1.899 7.936 7.597-1.984 7.597-7.936 7.597-7.937-1.9-7.937-7.597Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { Envelope };
