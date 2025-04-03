import { AIChatCompletionResponse } from "src/common/openai/interfaces/ai-chat-completion-response.interface";
import { ChatCompletionResponse } from '../interfaces/chat-completion-response.interface';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ChatCompletionHandler {
    transformResponse(response: AIChatCompletionResponse): ChatCompletionResponse {
        const choices = response.choices;
        const messages = choices.length === 0 ? [] : choices.map((choice, index) => ({
            index: index,
            message: {
                role: choice.message.role,
                content: choice.message.content
            }
        }));

        return {
            id: response.id,
            model: response.model,
            created: new Date(response.created * 1000), // Convert seconds to milliseconds
            messages: messages
        };
    }
}