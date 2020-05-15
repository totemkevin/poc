import { storiesOf } from '@storybook/vue'
import JTableRow from '../components/JTableRow/JTableRow.vue'

storiesOf('JTableRow', module)
  .add('normal', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [[
        'José Silva',
        'email@email.com'
      ],[
        'José Silva',
        'email@email.com'
      ]]
    })
  }))