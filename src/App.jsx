import { Component } from "react";

import "./App.css";

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return <>
            <NavBar></NavBar>
            <div className="bottomItems">
                <LeftDiv></LeftDiv>
                <RightDiv></RightDiv>
            </div>

        </>
    }
}

export default Main;

class NavBar extends Component {
    constructor() {
        super();
    }

    render() {
        return <>
            <div className="nav">
                <div className="leftItem">
                    <span>Quest</span>
                </div>
                <div className="rightItem">
                    <div className="rightItems">Home</div>
                    <div className="rightItems">About</div>
                    <div className="rightItems">Courses</div>
                    <div className="rightItems">Pages</div>
                    <div className="rightItems">Blog</div>
                </div>
            </div>
            <hr className="navHr" />
        </>
    }
}

class LeftDiv extends Component {
    constructor() {
        super();
    }

    render() {
        const text = "Grow your skills,\n define your future";
        return <>
            <div className="divItem1">
                {/* <h1 className="divItemHead1">
                    Grow your skills, 
                    define your future
                </h1> */}
                <h1 style={{ whiteSpace: "pre-line", color: "rgb(36, 146, 225)", fontSize: "3rem" }}>
                    {text}
                </h1>
                <p className="divItemPara1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque tempore harum ullam ist!
                </p>
                <div className="buttons">
                    <button className="button1">EXPLORE COURSES</button>
                    <button className="button2">LEARN MORE</button>
                </div>
            </div>
        </>
    }
}

class RightDiv extends Component {
    constructor() {
        super();
    }

    render() {
        return <>
            {/* <h1>heyy</h1> */}
            <div className="divItem2">
                <div className="divImg"></div>
            </div>
        </>
    }
}