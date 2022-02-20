import React from "react";
import Image from "next/image";
import styled from "styled-components";
import DisplaySize from "./DisplaySize";

const RoomContainer = styled.div`
  width: 25em;
  height: 25em;
  position: relative;
  margin: 0 auto 3em auto;
  @media only screen and (max-width: ${DisplaySize["tablet"]}) {
    width: 23em;
    height: 24em;
    margin: 0 auto 2em auto;
  }
  @media only screen and (max-width: ${DisplaySize["mobile"]}) {
    width: 19em;
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

const bearTypes = [
  { name: "friends", pos: [30, 44] },
  { name: "slouching", pos: [59, 38] },
  { name: "training", pos: [23, 60], size: 2.5 },
  { name: "optimistic", pos: [45, 62], size: 2.3 },
  { name: "rich", pos: [65, 75], size: 2.8 },
  { name: "modern", pos: [71, 24], size: 2.6 },
];

const Room = ({ bears = [] }) => {
  return (
    <RoomContainer>
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
