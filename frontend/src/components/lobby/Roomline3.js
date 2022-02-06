import { Button, Card, Image } from "react-bootstrap";
import React from "react";
import Styles from "./Lobby.module.css"
import L_Chat from "./L_Chat";
import Lockpicture from "./img/lockpicture.jpg";
import duet from "./img/duet.jpg";
import free from "./img/free.jpg";
import { Link } from "react-router-dom";

function Roomline3() {
    
    return(
        <div>
            {/* 두번째 줄은 top:'68%', 세번째 줄은 top:'106%', 
                네번째 줄은 top:'144%', 세번째 줄은 top:'182%'*/}
            <div>
                <div className={Styles.roomsamecss} style={{left: '5.95vw', top: '106vh'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={free} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <Link to='/basic' className={Styles.joindeco}><button className={Styles.joinbtn} >Join this room</button></Link>
                </div>

                <div className={Styles.roomsamecss} style={{left: '35.25vw', top: '106vh'}}>
                    {/* <video id="" controls 
                        className={Styles.video}>
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={duet} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull}>
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <Link to='/basic' className={Styles.joindeco}><button className={Styles.joinbtn} >Join this room</button></Link>
                </div>

                <div className={Styles.roomsamecss} style={{left: '50.25vw', top: '106vh'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={free} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <Link to='/basic' className={Styles.joindeco}><button className={Styles.joinbtn} >Join this room</button></Link>
                </div>
                
                <div className={Styles.roomsamecss} style={{right: '5.95vw', top: '106vh'}}>
                    {/* <video id="" controls 
                        className={Styles.video} >
                        <source src='?'></source>
                    </video> */}
                    <img className={Styles.video} src={Lockpicture} alt="thumbnail" />
                    <div 
                        className={Styles.roomtitle} >
                    </div>
                    <div 
                        className={Styles.roomuser} >
                    </div>
                    <div 
                        className={Styles.roomfull} >
                    </div>
                    <div className={Styles.tag}> #tag </div>
                    <Link to='/basic' className={Styles.joindeco}><button className={Styles.joinbtn} >Join this room</button></Link>
                </div>
            </div>
        </div>
        
    )
}

export default Roomline3;