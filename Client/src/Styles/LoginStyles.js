import { makeStyles } from "@material-ui/core/styles";

export const useLoginStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
  box: {
    height: "60vh",
    width: "50vw",
    padding: "3%",
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
  myH3: {
    fontSize: "2rem",
  },
}));
