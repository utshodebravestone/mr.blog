const Gap = ({ x, y }) => {
  return <div className={`my-${y || 0} mx-${x || 0}`}></div>;
};

export default Gap;
