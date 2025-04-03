export interface ChatCompletionResponse {
    id: string;
    model: string;
    created: Date;
    messages: ChatMessage[];
}

export interface ChatMessage {
    index: number;
    message: {
        role: string;
        content: string;
    }
}