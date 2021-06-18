import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSwipeTwoFingersLeftGesture(
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
        d="M12 17.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm0 0H5m0 0L7.4 15M5 17.5L7.4 20M12 6.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm0 0H5m0 0L7.4 4M5 6.5L7.4 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgSwipeTwoFingersLeftGesture);
export default ForwardRef;
