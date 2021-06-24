export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    aliginItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84ab"
  };
  const buttoneStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}> - Inline Styles - </p>
      <button style={buttoneStyle}>FIGHT!!</button>
    </div>
  );
};
