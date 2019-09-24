import React from 'react';

import { storiesOf } from '@storybook/react';
import Decorator from '../Decorator';
import Paragraph from './Paragraph';

storiesOf('Paragraphs', module)
  .addDecorator(Decorator)
  .add('default', () => <Paragraph>Tu zwyczajny tekst</Paragraph>);
