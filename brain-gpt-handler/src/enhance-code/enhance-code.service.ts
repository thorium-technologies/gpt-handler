import { Injectable } from '@nestjs/common';
import { OpenAiService } from 'src/common/openai/openai.service';
import { ChatCompletionHandler } from '../common/openai/response-handlers/chat-completion.handler';
import { ChatCompletionResponse } from '../common/openai/interfaces/chat-completion-response.interface';

@Injectable()
export class EnhanceCodeService {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly chatCompletionHandler: ChatCompletionHandler,
  ) {}

  async enhance(code: string, language: string): Promise<ChatCompletionResponse> {
    const prompt = `You are an expert developer. Please optimize and enhance the following ${language} code:\n\n${code}`;
    const response = await this.openAiService.sendPrompt(prompt);
    return this.chatCompletionHandler.transformResponse(response);
  }
}