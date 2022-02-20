import React, { useState } from "react";
import { Drawer } from "antd";
import styled from "styled-components";
import Image from "next/image";
import moment from "moment";
import BearTypes from "./BearTypes";

const StyledHeading = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  font-family: barlow;
  text-transform: uppercase;
  color: #928779;
  /* margin: 0 auto;
  height: fit-content; */
  text-align: center;
  margin-top: -0.5em;
`;

const StyledDrawer = styled(Drawer)`
  display: flex;
  .ant-drawer-header {
    /* display: none; */
    background: #e9e8d2;
  }
  .ant-drawer-wrapper-body {
    background-color: #e9e8d2;
    border-left: 3px solid #3a445d;
  }
  .ant-drawer-body {
    display: flex;
    scrollbar-width: none;
  }
  .ant-drawer-close {
    :hover {
      color: #756c5f;
    }
  }
  button {
    right: 0.5em;
    position: absolute;
    top: 0.5em;
    margin: 0;
    border-radius: 50%;
    background: #e9e8d2;
    padding: 0.5em;
    border: 2px solid transparent;
    :hover {
      /* filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.2)); */
      border: 2px solid #928779;
    }
  }
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

const LeftSection = styled.div`
  border-right: 5px solid #928779;
  width: 1.5em;
  margin: -24px 0px 0 0;
  position: absolute;
  inset: 0 0 0 26px;
`;
const RightSection = styled.div`
  width: 100%;
  /* overflow: auto; */
  margin-left: 20px;
  scrollbar-width: none;
`;
const TimeLog = styled.div``;

const ItemLog = styled.div`
  display: flex;
`;

const ItemDot = styled.span`
  min-height: 2em;
  min-width: 2em;
  max-height: 2em;
  min-height: 2em;
  display: inline-block;
  border: 5px solid #928779;
  border-radius: 50%;
  margin-top: 9px;
  margin-left: -16px;
  background-color: #e9e8d2;
  z-index: 100;
`;

const ItemContent = styled.span`
  margin-left: 1em;
  margin-bottom: 2em;
`;

const Time = styled.h3`
  font-size: 2.8rem;
  font-weight: 600;
  color: #928779;
  margin-bottom: 0;
`;
const LogDetails = styled.p`
  font-size: 2.4rem;
  color: #928779;
  line-height: 1.4em;
  white-space: break-spaces;
`;

const RewardsContainer = styled.div`
  background: rgba(146, 135, 121, 0.17);
  border-radius: 12px;
  padding: 1em;
`;

const ImageContainer = styled.div`
  width: 10em;
  height: 10em;
  position: relative;
  margin: auto;
`;

const ImageDetails = styled.p`
  text-align: center;
  margin-bottom: 0.2em;
  font-size: 2rem;
`;

const DateContainer = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8rem;
  color: #756c5f;
  text-align: center;
`;

const ActivityData = [
  {
    Datetime: "2022/02/19/12:30:40",
    Type: "mood",
    setLength: 24,
    Mood: "sad",
  },
  {
    Datetime: "2022/02/19/12:33:40",
    Type: "teddy",
    sessionLength: 120,
    plushieIndex: 0,
  },
  {
    Datetime: "2022/02/17/12:50:40",
    Type: "mood",
    Mood: "angry",
    setLength: 30,
    plushieIndex: 3,
  },
  {
    Datetime: "2022/02/16/12:33:40",
    Type: "teddy",
    sessionLength: 120,
    plushieIndex: 3,
  },
  {
    Datetime: "2022/02/16/12:33:40",
    Type: "teddy",
    sessionLength: 120,
    plushieIndex: 4,
  },
];
const SingleItem = styled.div``;
const FormatText = styled.span`
  text-transform: capitalize;
`;

const renderItems = () => {
  const printDate = (day1, day2) => {
    let firstDay = moment(day1);
    let secondDay = moment(day2);

    if (day1 === 0) {
      if (secondDay.isSame(new Date(), "day")) {
        return "Today";
      }
      return secondDay.format("MMMM D");
    }
    if (firstDay.isSame(secondDay, "day")) {
      return "";
    } else {
      return firstDay.format("MMMM D");
    }
  };

  return ActivityData.map((item, index) => {
    return (
      <SingleItem key={item}>
        <DateContainer>
          {index === 0
            ? printDate(0, item.Datetime)
            : printDate(item.Datetime, ActivityData[index - 1].Datetime)}
        </DateContainer>
        <ItemLog>
          <ItemDot />
          <ItemContent>
            <Time>{moment(item.Datetime).format("LT")}</Time>
            {item.Type === "mood" ? (
              <LogDetails>
                Mood: <FormatText>{item.Mood}</FormatText>
                <br />
                Set Length: {item.setLength} minutes
              </LogDetails>
            ) : (
              <>
                <LogDetails>Successfully studied for 120 minutes</LogDetails>
                <RewardsContainer>
                  <ImageContainer>
                    <Image
                      src={`/bears/${BearTypes[item.plushieIndex].name}.png`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </ImageContainer>
                  <ImageDetails>
                    Obtained:{" "}
                    <FormatText>{BearTypes[item.plushieIndex].name}</FormatText>{" "}
                    Bear
                    {item.plushieIndex === 0 ? "s!" : "!"}
                  </ImageDetails>
                </RewardsContainer>
              </>
            )}
          </ItemContent>
        </ItemLog>
      </SingleItem>
    );
  });
};

const TimeLine = ({ visible = false, close }) => {
  const handleClose = () => {
    return close(false);
  };

  return (
    <>
      <StyledDrawer visible={visible} onClose={handleClose}>
        <LeftSection />
        <RightSection>
          <StyledHeading>Timeline</StyledHeading>
          <TimeLog>{renderItems()}</TimeLog>
        </RightSection>
      </StyledDrawer>
    </>
  );
};

export default TimeLine;
