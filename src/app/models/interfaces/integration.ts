

export interface Integration {
  additionalInfo?: string;
  configuration?: string;
  createdTime?: number;
  debugMode?: boolean;
  defaultConverterId?: {
    id?: string;
  };
  downlinkConverterId?: {
    id?: string;
  };
  id?: {
    id?: string;
  };
  name?: string;
  routingKey?: string;
  tenantId?: {
    id?: string;
  };
  type?: IntegrationTypeEnum;
}

export type IntegrationTypeEnum = 'OCEANCONNECT' | 'SIGFOX' | 'THINGPARK' | 'TMOBILE_IOT_CDP' | 'HTTP' | 'MQTT' | 'AWS_IOT' |
  'IBM_WATSON_IOT' | 'TTN' | 'AZURE_EVENT_HUB' | 'OPC_UA';
export const IntegrationTypeEnum = {
  OCEANCONNECT: 'OCEANCONNECT' as IntegrationTypeEnum,
  SIGFOX: 'SIGFOX' as IntegrationTypeEnum,
  THINGPARK: 'THINGPARK' as IntegrationTypeEnum,
  TMOBILEIOTCDP: 'TMOBILE_IOT_CDP' as IntegrationTypeEnum,
  HTTP: 'HTTP' as IntegrationTypeEnum,
  MQTT: 'MQTT' as IntegrationTypeEnum,
  AWSIOT: 'AWS_IOT' as IntegrationTypeEnum,
  IBMWATSONIOT: 'IBM_WATSON_IOT' as IntegrationTypeEnum,
  TTN: 'TTN' as IntegrationTypeEnum,
  AZUREEVENTHUB: 'AZURE_EVENT_HUB' as IntegrationTypeEnum,
  OPCUA: 'OPC_UA' as IntegrationTypeEnum
};
