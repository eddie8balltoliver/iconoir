import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgRemoveFromCart(
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
        d="M3 6h19l-3 10H6L3 6zm0 0l-.75-2.5M9.992 11h4M11 19.5a1.5 1.5 0 01-3 0M17 19.5a1.5 1.5 0 01-3 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgRemoveFromCart);
export default ForwardRef;
