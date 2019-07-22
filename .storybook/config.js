import {
  configure
} from '@storybook/vue';
import componentConfig from '@/components.config'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);