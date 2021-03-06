import React from "react";
import Image from "next/image";
import styled from "styled-components";
import DisplaySize from "./DisplaySize";
import bearTypes from "./BearTypes";

const RoomContainer = styled.div`
  width: 25em;
  height: ${(props) => (props.login ? "80% " : "25em")};
  /* height: 25em; */
  min-width: 20em;
  min-height: 20em;
  position: relative;
  margin: ${(props) => (props.login ? "auto 0" : "0 auto 3em auto")};
  /* margin: 0 auto 3em auto; */
  /* margin: 0 auto 3em auto; */
  aspect-ratio: 1/1;

  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    width: 23em;
    height: 23em;
    margin: 0 auto 2em auto;
  }
  @media only screen and (max-width: ${DisplaySize["mobile"]}) {
    width: 20em;
    height: 20em;
  }
`;

const BearContainer = styled.div`
  width: ${(props) => (props.size ? props.size + "em" : "3em")};
  height: ${(props) => (props.size ? props.size + "em" : "3em")};

  position: relative;
  margin: auto;
`;

const PositionContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.placement ? props.placement[0] + "%" : 0)};
  left: ${(props) => (props.placement ? props.placement[1] + "%" : 0)};
`;

// const bearTypes = [
//   { name: "friends", pos: [30, 44] },
//   { name: "slouching", pos: [59, 38] },
//   { name: "training", pos: [23, 60], size: 2.5 },
//   { name: "optimistic", pos: [45, 62], size: 2.3 },
//   { name: "rich", pos: [65, 75], size: 2.8 },
//   { name: "modern", pos: [71, 24], size: 2.6 },
// ];

const Room = ({ bears = [], login = false }) => {
  return (
    <RoomContainer login={login}>
      <Image src={"/room.png"} layout="fill" objectFit="contain" />
      {bears.map((item) => (
        <PositionContainer placement={bearTypes[item].pos}>
          <BearContainer size={bearTypes[item].size}>
            <Image
              src={`/bears/${bearTypes[item].name}.png`}
              layout="fill"
              objectFit="contain"
            />
          </BearContainer>
        </PositionContainer>
      ))}
    </RoomContainer>
  );
};

export default Room;
