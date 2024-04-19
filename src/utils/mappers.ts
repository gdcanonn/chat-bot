import { ChatCompletion } from 'openai/resources/index.mjs'
import { getFormatedDate } from './helpers'
import { ChatMessageType } from './interfaces'
import { AUTHOR } from './constants'
import { UUID } from 'crypto'
import { v4 as uuidv4 } from 'uuid'

export const chatMapper = (completion: ChatCompletion) => {
  const currentDate = completion.created * 1000
  return {
    id: uuidv4() as UUID,
    date: {
      timestamp: currentDate,
      formated: getFormatedDate(currentDate),
    },
    message: completion.choices[0].message.content,
    author: AUTHOR.bot,
  } as ChatMessageType
}
