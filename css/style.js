const style = (function() {
  const divStyle = {
    width: '300px',
    height: '100px',
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: "1px",
    borderStyle: "solid",
    padding: "5px",
    position: "fixed",
    left: "100%",
    top: "100%",
    marginLeft: "-320px",
    marginTop: "-120px"
  }

  const imgStyle = {
    width: '80px',
    height: '80px',
    margin: "10px",
    backgroundColor: "#ccc",
    float: "left"
  }

  const pStyle = {
    float: "left",
    color: "#aaa",
    margin: "10px",
    height: "80px",
    "fontFamily": "sans-serif"
  }

  return {
    divStyle: divStyle,
    imgStyle: imgStyle,
    pStyle: pStyle
  }
})();

if (typeof module !== 'undefined') {
    module.exports = style;
}
