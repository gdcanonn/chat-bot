import HistoryLayout from '@/app/history/layout'
import HistoryPage from '@/app/history/page'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { emptyChats, historyChats } from '../mocks/historyMessage.mock'
import { mockLocalStorage } from '../mocks/mockLocalStorage'

// Mock useRouter:
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      push: jest.fn((url: string) => null),
    }
  },
}))

const { getItemMock } = mockLocalStorage()

describe('History page (Integration Tests)', () => {
  it('renders a History page with no saved chats', () => {
    // Arrange
    getItemMock.mockReturnValue(emptyChats)
    render(<HistoryPage />)

    // Act
    const textContent = 'Go chat! There are no chats in your history yet.'
    const emptyChatsText = screen.getByText(/Go chat! There are no chats in your history yet./i)

    // Assert
    expect(getItemMock).toHaveBeenCalled()
    expect(emptyChatsText).toHaveTextContent(textContent)
  })

  it('renders a History page with 2 saved chats', () => {
    // Arrange
    getItemMock.mockReturnValue(historyChats)
    render(<HistoryPage />)

    // Act
    const textContent = 'Me: Hello, Bot: Hi there! How can I assist you today?'
    const chatTitle = screen.getByText(/Me: Hello, Bot: Hi there! How can I assist you today?/i)

    // Assert
    expect(getItemMock).toHaveBeenCalled()
    expect(chatTitle).toHaveTextContent(textContent)
  })

  it('click on a saved chat to see it', async () => {
    // Arrange
    getItemMock.mockReturnValue(historyChats)
    render(<HistoryPage />)

    // Act
    fireEvent.click(screen.getByTestId('open-chat-history-test'))

    // Assert
    await waitFor(() => {
      expect(getItemMock).toHaveBeenCalled()
      // expect(useRouter().push).toHaveBeenCalledWith('/')
    })
  })

  it('click on a saved chat to see it', async () => {
    // Arrange
    getItemMock.mockReturnValue(historyChats)

    render(<HistoryPage />, {
      wrapper: ({ children }) => <HistoryLayout>{children}</HistoryLayout>,
    })

    // Act
    const image: HTMLImageElement = screen.getByTestId('open-chat-history-test')
    fireEvent.keyDown(image, { key: 'Enter', code: 13, charCode: 13 })

    // Assert
    await waitFor(() => {
      expect(getItemMock).toHaveBeenCalled()
      // expect(useRouter().push).toHaveBeenCalledWith('/')
    })
  })
})
