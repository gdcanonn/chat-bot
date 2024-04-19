import { Notification } from '@/components/atoms'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Notification Message', () => {
  it('renders a Notification message component', () => {
    // Arrange
    const message = 'Hellow World!'
    document.body.innerHTML =
      "<div id='notifications-portal' className='absolute top-8 right-8'></div>"
    render(<Notification severity='warning' message={message} />)

    // Act
    const notificationMsm = screen.getByText(/Hellow World!/i)

    // Assert
    expect(notificationMsm).toHaveTextContent(message)
  })
})
