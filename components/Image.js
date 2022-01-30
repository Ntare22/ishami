const Image = (props) => {
  return <img src={props.source.src} className={props.styles} />;
};

export default Image;
