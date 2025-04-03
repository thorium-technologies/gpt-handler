import { Injectable } from '@nestjs/common';
import { ChatCompletionResponse } from 'src/common/openai/interfaces/chat-completion-response.interface';
import { OpenAiService } from 'src/common/openai/openai.service';
import { ChatCompletionHandler } from 'src/common/openai/response-handlers/chat-completion.handler';

@Injectable()
export class CompactObjectService {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly chatCompletionHandler: ChatCompletionHandler,
  ) { }

  async getCompactObjectCode(language: string): Promise<ChatCompletionResponse> {
    const prompt = `You are an expert developer. Please provide a minimal code snippet in ${language} that obtains a compact object. Only return the code snippet.`;
    const aiResponse = await this.openAiService.sendPrompt(prompt);
    return this.chatCompletionHandler.transformResponse(aiResponse);
  }
}
