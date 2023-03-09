import { useSpring, animated } from "react-spring";
const AnimatedNumber = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="totalNumbers">
      {number.to((n) => n.toLocaleString())}
    </animated.div>
  );
};

export default AnimatedNumber;
