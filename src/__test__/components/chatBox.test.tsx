import { ChatBox } from '@/components/organisms'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { currentChat } from '../mocks/chatMessage.mock'

describe('Chat box', () => {
  it('renders the Chat box', () => {
    // Arrange
    window.HTMLElement.prototype.scrollIntoView = function () {}
    render(<ChatBox messages={JSON.parse(currentChat)} />)

    // Act
    const textContent = 'Hi there! How can I assist you today?'
    const chatMessage = screen.getByText(/Hi there! How can I assist you today?/i)

    // Assert
    expect(chatMessage).toHaveTextContent(textContent)
  })
})
