import { ChatButton } from '@/components/atoms'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Chat Button', () => {
  it('renders the chat button', () => {
    // Arrange
    render(<ChatButton imgTag='weather-forecast'>{"How's the weather like?"}</ChatButton>)

    // Act
    const image: HTMLImageElement = screen.getByAltText('Advice text')

    // Assert
    expect(image.src).toContain('weather-forecast.png')
  })

  it('click on the chat button', () => {
    // Arrange
    const sendTextToChat = jest.fn()
    render(
      <ChatButton imgTag='weather-forecast' onClick={sendTextToChat}>
        {"How's the weather like?"}
      </ChatButton>
    )

    // Act
    fireEvent.click(screen.getByTestId('chat-button-test'))

    // Assert
    expect(sendTextToChat).toHaveBeenCalled()
  })
})
