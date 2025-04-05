import { httpRequest } from '../http-client';
import { AIChatCompletionResponse } from '../../../core/types/ai-chat-completion-response';

export interface ProgrammingAlgorithmRequest {
    algorithm_name: string;
    language: string;
}

export const generateProgrammingAlgorithm = async (
    payload: ProgrammingAlgorithmRequest
): Promise<AIChatCompletionResponse> => {
    return httpRequest<AIChatCompletionResponse>('programming-algorithm', {
        method: 'POST',
        body: JSON.stringify(payload),
    });
};
