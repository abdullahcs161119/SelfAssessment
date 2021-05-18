import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./homeContent.scss";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10rem",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const HomeContent = () => {
  const classes = useStyles();
  let { name } = useParams();

  return (
    <section id="home-content">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{
                height: "auto",
                marginBottom: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
                Welcome {name}
              </h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default HomeContent;
