export const headingStyle = {
  textAlign: "center",
  backgroundColor: "#e1bee7",
  margin: "0",
  padding: "2% 0 0 0 ",
};

export const wrapperStyle = {
  height: "100vh",
  display: "grid",
  justifyItems: "center",
  alignContent: "space-evenly",
  textAlign: "center",
  backgroundColor: "#e1bee7",
};

export const chatAreaStyle = {
  marginTop: "2%",
  position: "relative",
  width: "90%",
  border: "2px solid #ce93d8",
  overflow: "auto ",
  gridRow: "1 / span 50",
  maxHeight: "90%",
  textAlign: "left",
  backgroundColor: "#f3e5f5",
};

export const notMeStyle = {
  margin: "1% 2% 1% 0.5%",
  padding: "0 2% 0 2%",
  display: "inline-block",
  backgroundColor: "#cda1c2",
  color: "#171517",
  wordWrap: "break-word",
  maxWidth: "40%",
  borderRadius: "0 25px 25px 25px",
};

export const meStyle = {
  margin: "1% 2% 1% 2%",
  display: "inline-block",
  padding: "0 2% 0 2%",
  backgroundColor: "#e5dce8",
  color: "#black",
  maxWidth: "40%",
  wordWrap: "break-word",
  borderRadius: "25px 25px 0 25px",
  textAlign: "initial",
};

export const editAreaStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};

export const sendButtonStyle = {
  height: "50%",
  padding: "1%",
  backgroundColor: "#b014e0",
  ":hover": { backgroundColor: "#a568c4" },
};

export const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
export const  stringAvatar=(name)=> {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split("")[0]}`,
  };
}
