import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import GameBoard from './GameBoard'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    board: {
        height: "100vh",
        width: "100vw",
        backgroundColor: "#DDDDDD",
        position: "relative",
    },
    scorecard: {
        border: "2px solid black",
        padding: "8px",
        boxSizing: "border-box"
    }
}))

function GameScreen(props) {
    const classes = useStyles()
    const [score, setScore] = useState(3)
    const handleScore = score => {
        setScore(score)
    }
    return (<React.Fragment>
        <Card className={classes.board}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{
                    paddingTop: "120px"
                }}
            >
                <Grid item xs={3} className={classes.scorecard} style={{ marginRight: "2px" }}>
                    Player Name: {props.playerName || "Player 1"}
                </Grid>
                <Grid item xs={3} className={classes.scorecard} style={{ marginLeft: "2px" }}>
                    Score: {score}
                </Grid>
            </Grid>
            <GameBoard setScore={handleScore}/>
        </Card>
    </React.Fragment>)
}

export default GameScreen;