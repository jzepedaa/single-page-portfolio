import React, { Component } from 'react';
import styled from 'styled-components';


const Styles = styled.div`

.footer{

  text-align: center;
  color: black;
 padding: 10px;
}


`;

class Footer extends Component {
  render() {
    return (
      <Styles>
        <div className="p-4">
          <div className="footer"> 
              Copyright © 2019 · All Rights Reserved J.Zepeda LLC
              </div>
        </div>
      </Styles>



    )
  }
}

export default Footer;
