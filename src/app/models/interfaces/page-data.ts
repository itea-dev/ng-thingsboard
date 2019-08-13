
import { Asset } from './asset';
import { Customer } from './customer';
import { Converter } from './converter';
import { DashboardInfo } from './dashboard';
import { Device } from './device';
import { EntityView } from './entity-view';
import { Integration } from './integration';
import { RuleChain } from './rule-chain';
import { Tenant } from './tenant';
import { User } from './user';
import { WidgetsBundle } from './widgets';
/* ******************************************** */
import { AlarmInfo } from './alarm';
import { Event } from './event';
import { ShortEntityView } from './entity-view';
import { AuditLog } from './auditLog';
import { BlobEntityInfo } from './other.interfaces';


export interface TextPageDataAsset {
  data?: Array<Asset>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataConverter {
  data?: Array<Converter>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataCustomer {
  data?: Array<Customer>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataDashboardInfo {
  data?: Array<DashboardInfo>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataDevice {
  data?: Array<Device>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataEntityView {
  data?: Array<EntityView>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataIntegration {
  data?: Array<Integration>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataRuleChain {
  data?: Array<RuleChain>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}


export interface TextPageDataTenant {
  data?: Array<Tenant>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataUser {
  data?: Array<User>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageDataWidgetsBundle {
  data?: Array<WidgetsBundle>;
  hasNext?: boolean;
  nextPageLink?: TextPageLink;
}

export interface TextPageLink {
  idOffset?: string;
  /**
   * Page link limit
   */
  limit: number;
  textOffset?: string;
  textSearch?: string;
  textSearchBound?: string;
}


/* **************************************** */


export interface TimePageDataAlarmInfo {
  data?: Array<AlarmInfo>;
  hasNext?: boolean;
  nextPageLink?: TimePageLink;
}

export interface TimePageDataAuditLog {
  data?: Array<AuditLog>;
  hasNext?: boolean;
  nextPageLink?: TimePageLink;
}

export interface TimePageDataBlobEntityInfo {
  data?: Array<BlobEntityInfo>;
  hasNext?: boolean;
  nextPageLink?: TimePageLink;
}

export interface TimePageDataDashboardInfo {
  data?: Array<DashboardInfo>;
  hasNext?: boolean;
  nextPageLink?: TimePageLink;
}

export interface TimePageDataEvent {
  data?: Array<Event>;
  hasNext?: boolean;
  nextPageLink?: TimePageLink;
}

export interface TimePageDataShortEntityView {
  data?: Array<ShortEntityView>;
  hasNext?: boolean;
  nextPageLink?: TimePageLink;
}

export interface TimePageLink {
  ascOrder?: boolean;
  endTime?: number;
  idOffset?: string;
  /**
   * Page link limit
   */
  limit: number;
  startTime?: number;
}
