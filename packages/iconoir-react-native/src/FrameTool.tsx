import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgFrameTool(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M2 7h1M2 17h1M21 7h1m-1 10h1M17 3V2M7 3V2m10 20v-1M7 22v-1M18 6.6v10.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6V6.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgFrameTool);
export default ForwardRef;
