import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyWelcomeMessage = styled.h1`
    position: absolute;
    width: 100%;
    top: 22rem;
    z-index: 1;
    text-align: center;
    strong {
    font-size: 1.25em;
}
div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    .main {
        font-size: 50px;
    }
    .sub {
        font-size: 27px;
        letter-spacing: 2px;
    }
}
`;

const WelcomeMessage = () => (
    <MyWelcomeMessage>
        <div className="mt-[-330px] xl:mt-[-165px] mx-10 xl:mx-14 special-elite-regular">
            <div className="heading">
                <div className="main text-center mb-3">
                    Hi, I am
                    <br />
                <span><strong>Souvik Nath</strong></span>
                </div>
                <div className="sub">
                    <Typewriter options={{
                        strings: ["MERN-stack Developer", "Tech Enthusiast", "Photographer", "Video Editor", "Gamer"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}/>
                </div>
            </div>
        </div>
    </MyWelcomeMessage>
);

export default WelcomeMessage;