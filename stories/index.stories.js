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

// import BaseButton from '../src/components/Button/BaseButton.vue'

storiesOf('Button2', module)
  .add('Default', () => ({
    template: //html
      `
    <base-button>
      radius 1
    </base-button>
    `
  }))
  .add('radius = 2', () => ({
    template: //html
      `
    <base-button :radius="2">
      radius 2
    </base-button>
    `
  }))
  .add('radius = 3', () => ({
    template: //html
      `
    <base-button :radius="3">
      radius 3
    </base-button>
    `
  }))
  .add('색 비교', () => ({
    template: //html
      `
    <div>
      <div style="margin:5px;background:orange;">
        <base-button color="white">
        white
        </base-button>
      </div>
      <div style="margin:5px;">
        <base-button >
        default
        </base-button>
        <base-button type="line">
        default line
        </base-button>
      </div>
      <div style="margin:5px;">
        <base-button color="pupple">
        pupple
        </base-button>
        <base-button color="pupple" type="line">
        pupple line
        </base-button>
      </div>
      <div style="margin:5px;">
        <base-button color="ocean">
          ocean
        </base-button>
        <base-button color="ocean" type="line">
          ocean line
        </base-button>
        <base-button color="ocean" type="fill">
          ocean fill
        </base-button>
      </div>
    </div>
    `
  }))
  .add('other size with width,height attr', () => ({
    // components: {
    //   'base-button': BaseButton
    // },
    template: //html
      `
    <base-button style="width:150px">
     With Text
    </base-button>
    `
  }))

storiesOf('TheSelect', module)
  .add('default', () => ({
    data() {
      return {
        cityValue: "",
        data: ['hi', 'hello', 'hi', 'bye']
      }
    },
    template: //html
      `
    <div>
      <base-select></base-select>
      <base-select color="pupple"></base-select>
      <base-select color="ocean"></base-select>
      <base-select :round="true"></base-select>
    </div>
    `
  }))