import React, {Component, useRef, useState} from 'react';
import styled from 'styled-components';
import {confetti} from './dom-confetti';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Confetti extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.props.active) {
      confetti(this.container, nextProps.config);
    }
  }

  setRef(ref) {
    this.container = ref;
  }

  render() {
    return (
      <Wrapper className={this.props.className} ref={this.setRef}/>
    );
  }
}