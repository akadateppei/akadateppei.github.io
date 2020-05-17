import * as React from "react";
import {BottomNavigation, Container, BottomNavigationAction} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import white from "./white.png";
import black from "./black.png";

interface navState {
    value: string;
}

function About() {
    const [value, setValue] = React.useState(0);
    return (
        // <Container maxWidth={"xs"}
        //            style={{padding: "0", position: "fixed", bottom: "0px", background: "#FFFFFF", zIndex: "111"}}>
        <div>
            <h1 className={"logo"}>Hair'z</h1>
            <div id={"firstLayer"}>
                <img src={white} alt={"firstLayer"} className={"firstLayer"}/>
            </div>
            <div id={"secondLayer"}>
                <img src={black} alt={"secondLayer"} className={"secondLayer"}/>
            </div>
        </div>
        // </Container>
    )

}

export default About;