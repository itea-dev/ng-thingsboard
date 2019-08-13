
import { EntityId, EntityTypeEnum } from './entity-id';
import { RelationsSearchParameters } from './relations-search-parameters';


export interface EntityView {
  additionalInfo?: string;
  createdTime?: number;
  customerId?: {
    id?: string;
  };
  endTimeMs?: number;
  entityId?: EntityId;
  id?: EntityViewId;
  keys?: TelemetryEntityView;
  name?: string;
  startTimeMs?: number;
  tenantId?: {
    id?: string;
  };
  type?: string;
}

export interface ShortEntityView {
  id?: EntityId;
  name?: string;
}


export interface TelemetryEntityView {
  attributes?: AttributesEntityView;
  timeseries?: Array<string>;
}

export interface AttributesEntityView {
  cs?: Array<string>;
  sh?: Array<string>;
  ss?: Array<string>;
}


export interface EntityViewId {
  entityType?: EntityTypeEnum;
  id?: string;
}

export interface EntityViewSearchQuery {
  entityViewTypes?: Array<string>;
  parameters?: RelationsSearchParameters;
  relationType?: string;
}
