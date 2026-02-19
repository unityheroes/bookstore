const HeadingTitle = ({ title }) => {
    return (<div style={divStyle}><h2 style={h2Style}>{title}</h2></div>);
}

const divStyle = {
    padding: "10px 30px",
    backgroundColor: "#f5f5f5",
};
const h2Style = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1926d2",
    borderBottom: "2px solid #1926d2",
    paddingBottom: "5px",
};
export default HeadingTitle;