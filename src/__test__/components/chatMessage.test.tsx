import { ChatMessage } from '@/components/atoms'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { chatInfoBot, chatInfoMe } from '../mocks/chatMessage.mock'

describe('Chat Message', () => {
  it('renders even index chat messages. (User chat)', () => {
    // Arrange
    render(<ChatMessage index={2} msg={chatInfoMe} />)

    // Act
    const image: HTMLImageElement = screen.getByRole('img')

    // Assert
    expect(image.src).toContain('user.png')
  })

  it('renders odd index chat messages. (Robot chat)', () => {
    // Arrange
    render(<ChatMessage index={1} msg={chatInfoBot} />)

    // Act
    const image: HTMLImageElement = screen.getByRole('img')

    // Assert
    expect(image.src).toContain('robot.png')
  })
})
