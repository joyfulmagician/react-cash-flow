import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  float: right;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-align: center;
    li {
      display: inline-block;
      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        color: #000;
      }
      :hover {
        border-bottom: 2px solid #e2e5ec;
      }
    }
  }
`;

class Dashbord extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <a href="">test</a>
            </li>
            <li>
              <a href="">test</a>
            </li>
            <li>
              <a href="">test</a>
            </li>
          </ul>
        </Nav>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          aspernatur illo aperiam, possimus commodi, hic consequatur tenetur
          officia quos sit cum numquam autem officiis facere ut dolorum iure
          quidem porro.
        </p>
      </Wrapper>
    );
  }
}

export default Dashbord;
