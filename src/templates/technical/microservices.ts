import { TemplateDefinition, TemplateCategory } from '../types'

export const microservices: TemplateDefinition = {
  id: 'microservices-map',
  name: 'Microservices Map',
  category: TemplateCategory.Technical,
  description: 'Microservices architecture map with service dependencies and communication patterns.',
  longDescription: 'Visualize your distributed system with a service dependency map showing sync and async communication patterns. Includes a service catalog table with ownership, SLAs, and tech stacks, plus architecture documentation covering monitoring and operations.',
  emoji: '\u2699\uFE0F',
  estimatedTime: '~5 min',
  blueprintId: 'microservices-map',
  brainCategory: 'technical-architecture',
  brainBlueprint: 'system-diagram',
  complexity: 'complex',
  color: '#3B82F6',
  tags: ['microservices', 'distributed', 'services', 'api gateway', 'architecture'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     MICROSERVICES MAP            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 SERVICE MAP    \u2502 ARCH DOCUMENT    \u2502
\u2502  [Gateway]     \u2502 \u2022 Boundaries     \u2502
\u2502   / | \\       \u2502 \u2022 Comm patterns  \u2502
\u2502 [A][B][C]     \u2502 \u2022 Failure modes  \u2502
\u2502   \\ | /       \u2502                  \u2502
\u2502  [MsgQueue]   \u2502                  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SERVICE CATALOG TABLE            \u2502
\u2502  Service|Owner|Stack|SLA|Status   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  OPERATIONS DOCUMENT              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'systemName', label: 'System Name', type: 'text', placeholder: 'e.g., E-Commerce Platform', required: true },
    { id: 'services', label: 'Services', type: 'textarea', placeholder: 'One service per line\ne.g., Auth Service\nUser Service\nOrder Service\nPayment Service', required: true },
    { id: 'messageBroker', label: 'Message Broker', type: 'select', placeholder: 'Select broker', required: false, options: ['Kafka', 'RabbitMQ', 'Redis Pub/Sub', 'AWS SQS/SNS', 'None'] },
    { id: 'apiGateway', label: 'API Gateway', type: 'text', placeholder: 'e.g., Kong, AWS API Gateway, Nginx', required: false },
    { id: 'communicationStyle', label: 'Communication Style', type: 'select', placeholder: 'Select primary style', required: false, options: ['REST (sync)', 'gRPC (sync)', 'Event-driven (async)', 'Hybrid'] },
  ],
  sections: [
    { id: 'serviceMap', name: 'Service Dependency Map', type: 'flowchart', description: 'Service topology with sync/async communication', icon: '\u2699\uFE0F' },
    { id: 'catalog', name: 'Service Catalog', type: 'table', description: 'Service details with ownership and SLAs', icon: '\u{1F4CB}' },
    { id: 'archDoc', name: 'Architecture Document', type: 'document', description: 'Service boundaries and communication patterns', icon: '\u{1F4DD}' },
    { id: 'opsDoc', name: 'Operations Document', type: 'document', description: 'Monitoring, alerting, and deployment independence', icon: '\u{1F6E0}\uFE0F' },
  ],
}
