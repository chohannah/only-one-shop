const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-input">
      <input
        className="form-input-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "is-shrinked" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
