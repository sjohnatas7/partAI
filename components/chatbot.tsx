"use client"

import { BubbleChat } from 'flowise-embed-react'

export default function ChatBot () {
    const config = {
        textInput: {
            placeholder: 'Como eu posso te ajudar?',
        }
    }
    return (
        <BubbleChat chatflowid="b4ffe82d-967b-4e3a-a66a-2b9d76aa6bfb"  textInput={config.textInput} title='PartAI'  showTitle={true} welcomeMessage='Olá, como eu posso ajudar?' apiHost="http://localhost:3000" />
    )
}