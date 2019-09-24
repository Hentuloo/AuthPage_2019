import React from 'react';
import { storiesOf } from '@storybook/react';
import Decorator from '../Decorator';
import Input from './Input';

storiesOf('Inputs', module)
  .addDecorator(Decorator)
  .add('defalut', () => <Input placeholder="Tu jest twój tekst!" />)
  .add('red', () => (
    <Input
      red
      message="źle wypełnione!"
      placeholder="Tu jest twój tekst!"
    />
  ));
