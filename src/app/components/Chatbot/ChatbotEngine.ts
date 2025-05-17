import { detectIntent } from './core/intentDetector';
import { cleanText } from './utils/textCleaner';
import { flowManager } from './core/flowManager';

export function chatbotEngine(userMessage: string): string {
  const cleaned = cleanText(userMessage);
  const intent = detectIntent(cleaned);
  const response = flowManager(intent, cleaned);
  return response;
}