import React from 'react';
import { storiesOf } from '@storybook/react';
import Decorator from '../Decorator';
import Button from './Button';

storiesOf('buttons', module)
  .addDecorator(Decorator)
  .add('defalut', () => <Button>Dołącz teraz!</Button>)
  .add('red', () => <Button red>Dołącz czerwony!</Button>);
