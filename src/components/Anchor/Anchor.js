import "./Anchor.scss";

const Anchor = ({ href, className, text }) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};

export default Anchor;
