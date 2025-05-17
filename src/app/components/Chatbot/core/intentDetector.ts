export type IntentType = 'saludo' | 'despedida' | 'presupuesto' | 'servicio' | 'consulta' | 'seguimiento' | 'desconocida';

export function detectIntent(message: string): IntentType {
  const msg = message.toLowerCase();

  if (/(hola|buenas|buen día|que tal)/.test(msg)) return 'saludo';
  if (/(chau|adiós|nos vemos)/.test(msg)) return 'despedida';
  if (/(presupuesto|cuánto cuesta|precio)/.test(msg)) return 'presupuesto';
  if (/(servicio|qué ofrecen|qué hacen)/.test(msg)) return 'servicio';
  if (/(consulta|tengo una duda|quiero preguntar)/.test(msg)) return 'consulta';
  if (/(quiero seguir|seguimos acá|me seguís ayudando)/.test(msg)) return 'seguimiento';

  return 'desconocida';
}