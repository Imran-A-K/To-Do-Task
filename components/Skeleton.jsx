import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  50% {
    background-color: hsl(200, 20%, 85%);
  }
  100% {
    background-color: hsl(200, 20%, 70%);
  }
`;

const SkeletonContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "16px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "4px"};
  background-color: hsl(200, 20%, 70%);
  animation: ${pulse} 1.5s infinite;
`;

const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <SkeletonContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default Skeleton;
