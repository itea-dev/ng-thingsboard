
import { RelationsSearchParameters } from './relations-search-parameters';
import { EntityId } from './entity-id';


export interface Device {
  additionalInfo?: string;
  createdTime?: number;
  customerId?: EntityId;
  id?: EntityId;
  name?: string;
  tenantId?: EntityId;
  type?: string;
}

export interface DeviceCredentials {
  createdTime?: number;
  credentialsId?: string;
  credentialsType?: CredentialsTypeEnum;
  credentialsValue?: string;
  deviceId?: EntityId;
  id?: {
    id?: string;
  };
}

export type CredentialsTypeEnum = 'ACCESS_TOKEN' | 'X509_CERTIFICATE';
export const CredentialsTypeEnum = {
  ACCESSTOKEN: 'ACCESS_TOKEN' as CredentialsTypeEnum,
  X509CERTIFICATE: 'X509_CERTIFICATE' as CredentialsTypeEnum
};

export interface DeviceSearchQuery {
  deviceTypes?: Array<string>;
  parameters?: RelationsSearchParameters;
  relationType?: string;
}
