import React, {Component} from 'react';
import "./Button.css";

interface Props {
  name: string;
  onBtnClick?: React.MouseEventHandler;
}

class ButtonC extends Component<Props> {

  render() {
    return (
      <>
        <button className="Button" onClick={this.props.onBtnClick}>{this.props.name}</button>
      </>
    );
  };
  }

export default ButtonC;