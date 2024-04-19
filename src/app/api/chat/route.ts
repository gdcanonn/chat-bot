import { ChatRequest } from '@/utils/interfaces'
import { chatMapper } from '@/utils/mappers'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { ChatCompletion } from 'openai/resources/index.mjs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request, context: any) {
  try {
    const req = (await request.json()) as ChatRequest

    const completion: ChatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: req.text }],
      model: 'gpt-3.5-turbo',
    })

    return NextResponse.json({ status: 200, data: chatMapper(completion) })
  } catch (error: any) {
    return NextResponse.json({ status: 500, error: error.message })
  }
}
