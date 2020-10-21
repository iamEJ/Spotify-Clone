import React from "react";
import "./css/Footer.css";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FeaturedVideoOutlinedIcon from "@material-ui/icons/FeaturedVideoOutlined";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png"
        />
        <div className="footer__songInfo">
          <h4>Attention</h4>
          <p>Charlie Puth</p>
        </div>
        <FavoriteIcon fontSize="small" className="footer__green" />
        <FeaturedVideoOutlinedIcon fontSize="small" className="footer__icon" />
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          className="footer__icon"
          fontSize="large"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
