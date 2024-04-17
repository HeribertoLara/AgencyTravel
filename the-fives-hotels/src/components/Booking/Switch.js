
const Switch = ({ isOn, handleToggle, colorOn, colorOff, name }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
        name={name}
      />
      <label
        style={{ background: isOn ? colorOn : colorOff }}
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};


export default Switch;