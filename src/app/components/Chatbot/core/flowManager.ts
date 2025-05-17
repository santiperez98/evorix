import { responses } from './responseTemplates';
import { IntentType } from './intentDetector';
import { webDevelopment } from '../services/webDevelopment';
import { seo } from '../services/seo';
import { communityManager } from '../services/communityManager';

export function flowManager(intent: IntentType, message: string): string {
  switch (intent) {
    case 'saludo':
      return responses.saludo;
    case 'despedida':
      return responses.despedida;
    case 'presupuesto':
      return responses.presupuesto;
    case 'servicio':
      if (/web/.test(message)) return `${webDevelopment.title}: ${webDevelopment.description}`;
      if (/seo/.test(message)) return `${seo.title}: ${seo.description}`;
      if (/community|cm/.test(message)) return `${communityManager.title}: ${communityManager.description}`;
      return responses.servicio;
    case 'consulta':
      return responses.consulta;
    case 'seguimiento':
      return responses.seguimiento;
    default:
      return responses.desconocida;
  }
}