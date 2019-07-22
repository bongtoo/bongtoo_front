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
      radius 1
    </base-button>
    `
  }))
  .add('radius = 2', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button :radius="2">
      radius 2
    </base-button>
    `
  }))
  .add('radius = 3', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button :radius="3">
      radius 3
    </base-button>
    `
  }))
  .add(':color="white"', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <div style="background:orange;">
    <base-button color="white">
    radius 3
    </base-button>
    </div>
    `
  }))
  .add('color="pupple"', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button color="pupple">
    radius 3
    </base-button>
    `
  }))
  .add('color="pupple" :line="true"', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button color="pupple" :line="true">
    radius 3
    </base-button>
    `
  }))
  .add('color="ocean"', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button color="ocean">
    radius 3
    </base-button>
    `
  }))
  .add('color="ocean" :line="true"', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button color="ocean" :line="true">
    radius 3
    </base-button>
    `
  }))
  .add('other size with width,height attr', () => ({
    components: {
      'base-button': BaseButton
    },
    template: //html
      `
    <base-button style="width:150px">
     With Text
    </base-button>
    `
  }))