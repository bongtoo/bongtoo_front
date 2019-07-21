/* eslint-disable react/react-in-jsx-scope */

import {
  storiesOf
} from '@storybook/vue';
import {
  action
} from '@storybook/addon-actions';
import {
  linkTo
} from '@storybook/addon-links';

import BaseButton from '../src/components/Button/BaseButton.vue'

storiesOf('Button2', module)
  .add('hi', () => ({
    template: '<div>sss</div>'
  }))
  .add('Default', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button>
    </base-button>
    asdf
    `
  }))
  .add('text with', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button>
     With Text
    </base-button>
    `
  }))