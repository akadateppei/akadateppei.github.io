import React from 'react';
import BottomNav from './BottomNav'
import './App.css';
import white from './white.png';
import black from './black.png';
import {BottomNavigation, BottomNavigationAction, Container} from "@material-ui/core";
import Blog from './Blog';
import Member from './Member';
import About from './About';
import Home from './Home';

interface mainState {
    home: boolean;
    about: boolean;
    member: boolean;
    blog: boolean;
    value: string;
    page: any;
}

class App extends React.Component<{}, mainState> {
    constructor(props) {
        super(props);
        this.state = {
            home: true,
            about: false,
            member: false,
            blog: false,
            value: 'home',
            page: <Home/>,
        }
    }

    render() {
        let page = this.changePage();
        const {value} = this.state;
        return (
            <div className="App">
                <Container maxWidth={"xs"} className={"images"}
                           style={{padding: "0", height: "100%", position: "relative"}}>
                    {page}
                    <div id={"thirdLayer"}>

                    </div>
                    <BottomNavigation showLabels value={value} onChange={this.setValue} style={{
                        paddingBottom: "10px",
                        position: "fixed",
                        bottom: '0',
                        zIndex: "999",
                        width: "100%"
                    }}>
                        <BottomNavigationAction label={<h2 style={{fontFamily: "bungee, sans-serif", fontWeight: "600",
                            fontStyle: "normal"}}>home</h2>}
                                                value='home'/>
                        <BottomNavigationAction label={<h2 style={{fontFamily: "bungee, sans-serif", fontWeight: "600",
                            fontStyle: "normal"}}>about</h2>}
                                                value='about'/>
                        <BottomNavigationAction label={<h2 style={{fontFamily: "bungee, sans-serif", fontWeight: "600",
                            fontStyle: "normal"}}>member</h2>}
                                                value={'member'}/>
                        <BottomNavigationAction label={<h2 style={{fontFamily: "bungee, sans-serif", fontWeight: "600",
                            fontStyle: "normal"}}>blog</h2>}
                                                value='blog'/>
                    </BottomNavigation>
                </Container>
            </div>
        );
    }

    changePage = () => {
        let page;
        switch (this.state.value) {
            case "blog":
                page = <Blog/>
                break;
            case "about":
                page = <About/>
                break;
            case "member":
                page = <Member/>
                break;
            default:
                page = <Home/>
        }
        return page
    }

    setValue = (event, value) => {
        this.setState({value});
    };

}

export default App;
