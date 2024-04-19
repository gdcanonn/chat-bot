import { HistoryMessage } from '@/components/atoms'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { infoChatMsm } from '../mocks/historyMessage.mock'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('History Message', () => {
  it('renders the History Message Information', () => {
    // Arrange
    render(<HistoryMessage info={infoChatMsm} tabIndex={0} />)

    // Act
    const paragraphs: HTMLParagraphElement[] = screen.getAllByRole('paragraph')

    // Assert
    expect(paragraphs[0]).toHaveTextContent('Me: Hello, Bot: Hi there! How can I assist you today?')
    expect(paragraphs[1]).toHaveTextContent('2024-04-13 03:43 PM')
  })
})
