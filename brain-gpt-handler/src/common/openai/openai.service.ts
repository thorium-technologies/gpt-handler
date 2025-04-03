// src/common/openai/openai.service.ts
import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { OpenAiStaticConfig } from '../config/openai-static.config';
import { AIChatCompletionResponse } from './interfaces/ai-chat-completion-response.interface';

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async sendPrompt(prompt: string): Promise<AIChatCompletionResponse> {
    return await this.openai.chat.completions.create({
      model: OpenAiStaticConfig.MODEL,
      messages: [{ role: OpenAiStaticConfig.MESSAGE_ROLE, content: prompt }],
    }) as AIChatCompletionResponse;
  }
}