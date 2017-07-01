import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    const { emailInputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={emailInputStyle}
          />
        </CardSection>
          <TextInput />
        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  emailInputStyle: {
    height: 20,
    width: 100,
  }
};

export default LoginForm;
