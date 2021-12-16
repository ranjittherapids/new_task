import React, { useState } from 'react'
import './layout.css'
export default function Layout() {
    const [showsetting, setshowsetting] = useState(false)
    const [showcreatenewgame, setshowcreatenewgame] = useState(false)
    const [discord, setdiscord] = useState(false)
    return (
        <>
            <div className='layoutcontainer'>
                <div className='sidebarcontainer'>
                    <div className='sidebartop'>
                        <div className='sidebarlogo'>
                            <img src='./logo.png' alt="wow" />
                            <button>uk223kiaq</button>
                        </div>
                        <div className='sidebaroption'>

                            <p> <i class="fas fa-home"></i>HOME</p>
                            <p onClick={() => {
                                setshowcreatenewgame(pre => !pre)
                                setshowsetting(false)
                            }
                            } > <i class="fas fa-user"></i>Game </p>
                            <p onClick={() => {
                                setdiscord(pre => !pre)
                                setshowsetting(false)
                                setshowcreatenewgame(false)
                            }}> <i class="fas fa-comment-dots"></i>DISCORD</p>
                            <p onClick={() => {
                                setshowsetting(pre => !pre)
                                setshowcreatenewgame(false)
                            }}> <i class="fas fa-cog"></i>Setting </p>
                            <button><span>+</span>Create New Game</button>
                        </div>
                    </div>
                    <div className='sidebarbottom'>
                        <p> <i class="fas fa-power-off"></i>Disconnect</p>
                    </div>
                </div>
                <div className='bodypartcontainer'>
                    <div className='bodypartbox'>
                        {discord ?
                            <div className='discordContainer'>
                                <p>[Game Name]</p>
                                <div className='playerContainer'>
                                    {[1, 1, 2, 22, , 2, 2].map(data => {
                                        return <button style={{ borderRadius: "5px", padding: "5px 15px", margin: "0px 10px" }}>player X</button>
                                    })
                                    }
                                </div>
                                <p>Question:</p>
                                <small>Question: Sure, Sex Is Great. But Have you Ever Tried _______?</small>
                                <div className='cardContainer'>
                                    <p>your card:</p>
                                    <div className='cardbox'>
                                        {
                                            [1,2,1, 12, 1, 1].map(data => {
                                                return <div className='cards'>
                                                    <p>Saying GM No Matter What Time It Is </p>
                                                </div>

                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            :
                            <>
                                <p>Game:</p>
                                <div className='gamecardConatiner'>
                                    {[2, 2, 3, 12, 1, 1, 2, 1].map(data => {
                                        return <div className='gamecardbox'>
                                            <div className='gamecardboxtop'>
                                                <p>ButtLicker69s</p>
                                                <p> Players: 4</p>
                                                <p>Private? NO</p>
                                            </div>
                                            <div className='gamecardboxbotton'>
                                                <button>Join</button>
                                                <img src="logo.png" alt='#' />
                                            </div>


                                        </div>
                                    })}

                                </div>
                            </>
                        }
                    </div>
                    <div className='bodypartchat'>
                        <p>Lobby Chat</p>
                        <div className='chatbox'>
                            <p> <img src='./usericon.png' /> that why a greate chat</p>
                            <p> <img src='./usericon.png' /> that why a greate chat</p>
                            <input type="text"  placeholder='chat...' />
                        </div>
                    </div>
                </div>
                <div style={{ display: `${showsetting ? "block" : "none"}` }} className='settingpopup'>
                    <p>Setting</p>
                    <small>Username_ _ _ _ _ _ _ _</small><br />
                    <small>Other Setting _ _ _ _ _ _ _</small><br />
                    <small>Other Setting _ _ _ _ _ _ _</small><br />
                    <button>enter</button>
                </div>

            </div>
            <div style={{ display: `${showcreatenewgame ? "block" : "none"}` }} className='gamepopup'>
                <p>Create New Game:</p>
                <small className='gameinput'> Game Name:<input type="text" placeholder='Text Goes here' /></small><br />
                <small>packs:</small><br />
                <div className='radiobtnbox'>  <input type="radio" name="fav_language" /> starteer pack<br />
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript" />extenstion x
                </div>
                <button>enter</button>
            </div>
{/* <div style={} className='homepage'>
hello homepage
</div> */}
        </>
    )
}
