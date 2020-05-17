import * as React from "react";
import {BottomNavigation, Container, BottomNavigationAction} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

interface navState {
    value: string;
}

function Blog() {
    const [value, setValue] = React.useState(0);
    return (
        <Container maxWidth={"xs"}
                   style={{padding: "0", position: "fixed", bottom: "0px", background: "#FFFFFF", zIndex: "111"}}>
            <h1>blog</h1>
            <p>2014年、同じ高校の同級生の4人と隣の高校の1人によって結成。以降メンバーの増減を繰り返し現在の10人に至る。</p>
            <h2>活動内容</h2>
            <p>活動内容は主にゲームでの交流・ブログ・YouTubeであり、特にYouTubeやブログの視聴者数はごくわずかという超小規模での活動である。</p>
        </Container>
    )

}

export default Blog;