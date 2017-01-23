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
    width: "180px",
    "fontFamily": "sans-serif"
  }

  const loggedinDot = {
    position: 'fixed',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#5ABC76',
    top: '10px',
    left: '100%',
    marginLeft: '-20px'
  }

  return {
    divStyle: divStyle,
    imgStyle: imgStyle,
    pStyle: pStyle,
    loggedinDot: loggedinDot
  }
})();

if (typeof module !== 'undefined') {
    module.exports = style;
}
