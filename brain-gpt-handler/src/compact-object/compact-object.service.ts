import { Injectable } from '@nestjs/common';
import { OpenAiService } from 'src/common/openai/openai.service';
import { CompactObjectHandler } from './response-handlers/compact-object.handler';
import { CompactObjectResponse } from './interfaces/compact-object-response.interface';

@Injectable()
export class CompactObjectService {
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly compactObjectHandler: CompactObjectHandler,
  ) {}

  /**
   * Returns a code snippet in the given programming language
   * that creates or obtains a compact object.
   */
  async getCompactObjectCode(language: string): Promise<CompactObjectResponse> {
    // Consider storing repeated strings or prompts in a constants file
    const prompt = `You are an expert developer. 
Please provide a minimal code snippet in ${language} that obtains a compact object. 
Only return the code snippet.`;

    const aiResponse = await this.openAiService.sendPrompt(prompt);
    return this.compactObjectHandler.transformResponse(aiResponse);
  }
}
