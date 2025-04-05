export interface AIChatCompletionResponse {
    id: string;
    model: string;
    created: string; // Changed to string to match ISO date format in the sample
    messages: AICompletionMessage[];
}

export interface AICompletionMessage {
    index: number;
    message: {
        role: string;
        content: string;
    };
}