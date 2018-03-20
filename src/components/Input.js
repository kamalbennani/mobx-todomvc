import React from 'react';

class Input extends React.Component {
  state = {
    text: '',
  };

  handleSubmit = evt => {
    const text = evt.target.value.trim();
    if (evt.which === 13) {
      this.props.onSave(text);
      this.setState({
        text: '',
      });
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <input
        className={this.props.className}
        type="text"
        autoFocus="true"
        value={this.state.text}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default Input;
