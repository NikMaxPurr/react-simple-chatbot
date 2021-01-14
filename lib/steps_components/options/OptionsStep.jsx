import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Option from './Option';
import OptionElement from './OptionElement';
import Options from './Options';
import OptionsStepContainer from './OptionsStepContainer';

class OptionsStep extends Component {
  onOptionClick = ({ value }) => {
    const { triggerNextStep } = this.props;

    triggerNextStep({ value });
  };

  renderOption = option => {
    const { bubbleOptionStyle, step } = this.props;
    const { user } = step;
    const { value, label } = option;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const Content = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    `;
    const Time = styled.p`
      margin-left: 24px;
      color: #97909e;
      font-size: 10px;
      line-height: 18px;
    `;

    return (
      <Option key={value} className="rsc-os-option">
        <Content>
          <OptionElement
            className="rsc-os-option-element"
            style={bubbleOptionStyle}
            user={user}
            onClick={() => this.onOptionClick({ value })}
          >
            {label}
          </OptionElement>
          <Time>{`${hours}:${minutes}`}</Time>
        </Content>
      </Option>
    );
  };

  render() {
    const { step } = this.props;
    const { options } = step;

    return (
      <OptionsStepContainer className="rsc-os">
        <Options className="rsc-os-options">
          {Object.keys(options).map(key => options[key]).map(this.renderOption)}
        </Options>
      </OptionsStepContainer>
    );
  }
}

OptionsStep.propTypes = {
  bubbleOptionStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  triggerNextStep: PropTypes.func.isRequired
};

export default OptionsStep;
