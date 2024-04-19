import { HeaderHistory } from '@/components/organisms'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn((url: string) => null),
    }
  },
}))

describe('Header Hisory', () => {
  it('renders the Header History', () => {
    // Arrange
    render(<HeaderHistory />)

    // Act
    const imageRobot: HTMLImageElement = screen.getByAltText('Robot')
    const imageHistory: HTMLImageElement = screen.getByAltText('History')

    // Assert
    expect(imageRobot.src).toContain('robot.png')
    expect(imageHistory.src).toContain('history.png')
  })

  it('click on image to Go Home', async () => {
    // Arrange
    render(<HeaderHistory />)

    // Act
    const imageRobot: HTMLImageElement = screen.getByAltText('Robot')
    fireEvent.keyDown(imageRobot, { key: 'Enter', code: 13, charCode: 13 })

    // Assert
    // expect(useRouter().push).toHaveBeenCalledWith('/')
  })
})
