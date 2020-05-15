import Vue from 'vue';
import MyButton from './MyButton.js';

export default { title: 'Button2' };

export const withPic = () => '<my-button>😀 😎 👍 💯</my-button>';

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button :rounded="true">rounded</my-button>'
});
