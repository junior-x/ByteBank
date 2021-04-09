import React from "react";
import styled from "styled-components";
import "./style.css";


const Item = styled.div`
  display: flex;
  flex-direction: column;


`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  );
};
