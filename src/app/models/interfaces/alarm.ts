
import { EntityId } from './entity-id';


export interface Alarm {
  ackTs?: number;
  clearTs?: number;
  createdTime?: number;
  details?: string;
  endTs?: number;
  id?: {
    id?: string;
  };
  name?: string;
  originator?: EntityId;
  propagate?: boolean;
  severity?: SeverityEnum;
  startTs?: number;
  status?: StatusEnum;
  tenantId?: {
    id?: string;
  };
  type?: string;
}

export type SeverityEnum = 'CRITICAL' | 'MAJOR' | 'MINOR' | 'WARNING' | 'INDETERMINATE';
export const SeverityEnum = {
  CRITICAL: 'CRITICAL' as SeverityEnum,
  MAJOR: 'MAJOR' as SeverityEnum,
  MINOR: 'MINOR' as SeverityEnum,
  WARNING: 'WARNING' as SeverityEnum,
  INDETERMINATE: 'INDETERMINATE' as SeverityEnum
};

export type StatusEnum = 'ACTIVE_UNACK' | 'ACTIVE_ACK' | 'CLEARED_UNACK' | 'CLEARED_ACK';
export const StatusEnum = {
  ACTIVEUNACK: 'ACTIVE_UNACK' as StatusEnum,
  ACTIVEACK: 'ACTIVE_ACK' as StatusEnum,
  CLEAREDUNACK: 'CLEARED_UNACK' as StatusEnum,
  CLEAREDACK: 'CLEARED_ACK' as StatusEnum
};

export interface AlarmInfo extends Alarm {
  originatorName?: string;
}
