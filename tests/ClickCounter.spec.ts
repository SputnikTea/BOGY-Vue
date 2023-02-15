import { fireEvent, render } from '@testing-library/vue'
import { it } from 'vitest'
import Component from '../components/ClickCounter.vue'

it('increments value on click', async () => {
  const { getByText } = render(Component)
  getByText('Times clicked: 0')

  const button = getByText('increment')
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})
