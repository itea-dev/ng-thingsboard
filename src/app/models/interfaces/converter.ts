

export interface Converter {
  additionalInfo?: string;
  configuration?: string;
  createdTime?: number;
  debugMode?: boolean;
  id?: {
    id?: string;
  };
  name?: string;
  tenantId?: {
    id?: string;
  };
  type?: ConverterTypeEnum;
}

export type ConverterTypeEnum = 'UPLINK' | 'DOWNLINK';
export const ConverterTypeEnum = {
  UPLINK: 'UPLINK' as ConverterTypeEnum,
  DOWNLINK: 'DOWNLINK' as ConverterTypeEnum
};
