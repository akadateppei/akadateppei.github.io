import * as React from "react";
import {BottomNavigation, Container, BottomNavigationAction} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = {
    root: {
        color: "#20530"
    },
    btnroot: {
        color: "#c6c6c6",
    },
    selected: {
        color: "#CC173E",
    },
}

interface navState {
    value: string;
    // setValue: any;
}


class BottomNav　extends React.Component<{}, navState>{
    // const [value, setValue] = React.useState(0);
    constructor(props) {
        super(props);
        this.state = {
            value: 'home',
        }
    }

    setValue = (event, value) => {
        this.setState({value});
    };

    render() {
        const {value} = this.state;
        return (
            <Container maxWidth={"xs"}
                       style={{padding: "0", position: "fixed", bottom: "0px", background: "#0D0007", zIndex: "111"}}>

            </Container>
        )
    }
}

export default withStyles(styles)(BottomNav);