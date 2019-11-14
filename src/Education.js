import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h2 style={{ marginTop: '0px' }}>{this.props.schoolName}</h2>
          <h5><strong>{this.props.schoolDegree}</strong></h5>
          <p>{this.props.schoolDescription}</p>
          <hr style={{ borderTop: '3px solid Green', width: '50%' }} />

        </Cell>
      </Grid>
    )
  }
}

export default Education;
