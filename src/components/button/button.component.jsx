const BUTTON_TYPE_CLASSES = {
  filled: "filled",
  outlined: "outlined",
};

const BUTTON_SIZE_CLASSES = {
  sm: "btn-sm",
  md: "btn-md",
};
const Button = ({ children, buttonType, buttonSize, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${BUTTON_SIZE_CLASSES[buttonSize]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
