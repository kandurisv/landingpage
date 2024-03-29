const addButtonsStyles = {
  container: {
    px: ["4%", "4%", "0%", "0%", "0%", "0%"],
    // mb: "16px",
    justifyContent: [
      "justify-evenly",
      "justify-evenly",
      "flex-end",
      "flex-end",
      "space-between",
      "space-between",
    ],
    flexDirection: ["column","column","row","row","row","row"],
    // alignItems: "flex-start",
    // width: ["100%", "100%", null],
  },
  analytics: {
    width: ["100%", "100%", "50%","50%"],
  },
  flex: {
    ml:["0px","0px","-8px","-8px","-8px","-8px"],
    backgroundColor: "transparent",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  addbutton: {
    // mt: "16px",
    borderRadius: "16px",
    borderWidth: "2px",
    borderColor: "#FFF",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
    ml: "8px",
    color: "#D7354A",
    // flexDirection: "row",
    // cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    py: ["2px", "2px", "4px", "8px"],
    // px: ["4px", "4px", "8px", "16px"],
    flex: [1, 1, `0 1 auto`],
  },
  addbuttonText: {
    ml: "6px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#D7354A",
  },
  showAnalytics: {
    // mt: "16px",
    borderRadius: "16px",
    borderWidth: "2px",
    borderColor: "#FFF",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
    // ml: "16px",
    color: "#4B0082",
    flexDirection: "row",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    py: ["2px", "2px", "4px", "8px"],
    px: ["4px", "4px", "8px", "16px"],
    mx: "4px",
    flex: [1, 1, `0 1 auto`],
  },
  showAnalyticsText: {
    ml: "6px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
    // color: "#D7354A",
  },
  button: {
    fontSize: "16px",
    color: "#ffff",
    fontWeight: 700,
    borderRadius: "8px",
    height: ["48px", null, null, null, null, "60px", "60px"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 32px",
    WebkitAppearance: "none",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    mx: ["auto", 0],
    transition: "all 500ms ease",
    "&:hover": {
      backgroundColor: "secondary",
    },
  },
};

export default addButtonsStyles;
