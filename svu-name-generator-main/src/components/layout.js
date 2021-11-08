import React from 'react'
import { AppBar,   Grid,  IconButton,  Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Main from '../pages/main';
import { styled } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    main: {
      width: '100%',
    },
    modalStyle1:{
      position:'absolute',
      top:'10%',
      left:'10%',
      overflow:'scroll',
      height:'100%',
      display:'block'
    },

  }))

const ToolBarPadder = styled('div')({
    // necessary for content to be below app bar
    height: '5em',
})

function Layout(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="fixed" sx={{ backgroundColor: "#981e32" }} >
                <Toolbar>
                    
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={2}>
                            <IconButton color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8} textAlign="center"> 
                            <Typography   >SVU Name Generator</Typography>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <main  className={classes.main}>
                <ToolBarPadder/>
                <Main></Main>
            </main>

        </div>
    )
}

export default Layout