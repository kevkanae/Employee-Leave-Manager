import { makeStyles } from "@material-ui/core/styles";

export const useMainStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  box: {
    height: "65vh",
    width: "60vw",
    padding: "1%",
    backgroundColor: "white",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
  period: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonBox: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  start: {
    width: "47%",
  },
  end: {
    width: "47%",
  },
}));
