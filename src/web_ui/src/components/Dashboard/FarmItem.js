import React from 'react';
import { makeStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AddIcon from '@material-ui/icons/Add';

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: '700px',
      justifyContent: 'center',
      margin: '10px auto'
    },

    footer: {
      display: 'flex',
      justifyContent: 'center'
    },

    title1: {
      width: '104px',
      height: '30px',
      left: '24px',
      top: '24px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '30px',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.87)',
      float: 'left'
    },

    title2: {
      width: '104px',
      height: '30px',
      left: '24px',
      top: '24px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '30px',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.87)',
      float: 'right'
    },

    word: {
      height: '18px',
      left: '100px',
      right: '32px',
      top: 'calc(50% - 18px/2)',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.1px',
      color: '#2196F3'
    },

    paper: {
      width: '800px',
      margin: '150px auto',
      background: '#FFFFFF',
      border: '1px solid #E5E5E5',
      boxSizing: 'border-box',
      borderRadius: '4px',
      justifyContent: 'center'
    },
    row: {
      width: '700px',
      margin: '10px auto',
      left: '8px',
      right: '8px',
      top: '50px',
      bottom: '50px',
      background: '#E3F2FD',
      borderRadius: '4px',
      display: 'flex'
    },
    row2: {
      background: '#FFFFFF',
      float: 'right',
      display: 'flex'
    },
    bookmark: {
      color: '#2196F3',
      float: 'left'
    }
  })
);

export default function FarmItem() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.container}>
        <div className={classes.title1}>Farm Items</div>
        <div className={classes.row2}>
          <div className={classes.title2}>Add New</div>
          <AddIcon />
        </div>
        <div className={classes.row}>
          <BookmarkIcon className={classes.bookmark} />
          <div className={classes.word}>Nakati</div>
        </div>
        <div className={classes.row}>
          <BookmarkIcon className={classes.bookmark} />
          <div className={classes.word}>Ddodo</div>
        </div>
        <div className={classes.row}>
          <BookmarkIcon className={classes.bookmark} />
          <div className={classes.word}>Tomatoes</div>
        </div>
        <div className={classes.row}>
          <BookmarkIcon className={classes.bookmark} />
          <div className={classes.word}>Yams</div>
        </div>
        <div className={classes.footer}>SEE ALL</div>
      </div>
    </div>
  );
}
