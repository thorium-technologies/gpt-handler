import { httpRequest } from '../http-client';
import { AIChatCompletionResponse } from '../../../core/types/ai-chat-completion-response';

export interface EnhanceRequest {
    code: string;
    language: string;
}

export const enhanceCode = async (
    payload: EnhanceRequest
): Promise<AIChatCompletionResponse> => {
    return httpRequest<AIChatCompletionResponse>('enhance-code', {
        method: 'POST',
        body: JSON.stringify(payload),
    });
};
