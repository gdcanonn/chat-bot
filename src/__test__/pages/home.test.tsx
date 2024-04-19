import { useHome } from '@/components/templates/Home/hooks/useHome'
import { GlobalContext } from '@/contexts/Global'
import '@testing-library/jest-dom'
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import axios from 'axios'
import HomePage from 'src/app/page'
import { currentChat, mockResponse } from '../mocks/chatMessage.mock'
import { valuesGlobalContext } from '../mocks/globalContext.mock'
import { historyChats } from '../mocks/historyMessage.mock'
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

// Mock axios:
jest.mock('axios', () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      post: jest.fn((_url, _body) => {
        return new Promise((resolve) => {
          resolve(mockResponse)
        })
      }),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  }
})

const { getItemMock, setItemMock } = mockLocalStorage()

describe('Home page. (Integration Test)', () => {
  it('renders a Home page', () => {
    // Arrange
    getItemMock.mockReturnValue(currentChat)
    render(<HomePage />)

    // Act
    const textContent = 'This is Jarvis how may I help you'
    const welcomeText = screen.getByText(/This is Jarvis how may I help you/i)

    // Assert
    expect(welcomeText).toHaveTextContent(textContent)
    expect(getItemMock).toHaveBeenCalled()
  })

  it('click on New Chat', async () => {
    // Arrange
    getItemMock.mockReturnValue(currentChat)
    render(<HomePage />)

    // Act
    fireEvent.click(screen.getByTestId('new-chat-test'))

    // Assert
    const chatMessage = await screen.findByText('Give me an advice')
    expect(chatMessage).toBeInTheDocument()
    expect(getItemMock).toHaveBeenCalled()
  })

  it('pressing Enter key on New Chat. (KeyDown)', async () => {
    // Arrange
    getItemMock.mockReturnValue(currentChat)
    render(<HomePage />)

    // Act
    const image: HTMLImageElement = screen.getByTestId('new-chat-test')
    fireEvent.keyDown(image, { key: 'Enter', code: 13, charCode: 13 })

    // Assert
    const chatMessage = await screen.findByText('Give me an advice')
    expect(chatMessage).toBeInTheDocument()
    expect(getItemMock).toHaveBeenCalled()
  })

  it('pressing Enter key on History images. (KeyDown)', () => {
    // Arrange
    getItemMock.mockReturnValue(currentChat)
    render(<HomePage />)

    // Act
    const image: HTMLImageElement = screen.getByTestId('new-chat-history-test')
    fireEvent.keyDown(image, { key: 'Enter', code: 13, charCode: 13 })

    // Assert
    expect(getItemMock).toHaveBeenCalled()
  })

  it('click on New Chat, calling updating chat function', async () => {
    // Arrange
    getItemMock.mockReturnValue(currentChat)
    getItemMock.mockReturnValue(historyChats)

    render(
      <GlobalContext.Provider value={valuesGlobalContext}>
        <HomePage />
      </GlobalContext.Provider>
    )

    // Act
    fireEvent.click(screen.getByTestId('new-chat-test'))

    // Assert
    expect(getItemMock).toHaveBeenCalled()
  })

  it('testing useHome custome hook. Calling async API', async () => {
    // Arrange
    getItemMock.mockReturnValue(JSON.stringify([]))
    ;(axios.create().post as jest.Mock).mockResolvedValue(mockResponse)

    // Act
    const { result } = renderHook(() => useHome())
    await act(async () => {
      await result.current.handleClick()
      await result.current.sendMessage('Hi')
    })

    // Assert
    expect(result.current.loading).toBe(false)
  })
})
