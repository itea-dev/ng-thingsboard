

export interface SchedulerEvent {
  additionalInfo?: string;
  configuration?: string;
  createdTime?: number;
  customerId?: {
    id?: string;
  };
  id?: {
    id?: string;
  };
  name?: string;
  schedule?: string;
  tenantId?: {
    id?: string;
  };
  type?: string;
}

export interface SchedulerEventInfo {
  additionalInfo?: string;
  createdTime?: number;
  customerId?: {
    id?: string;
  };
  id?: {
    id?: string;
  };
  name?: string;
  schedule?: string;
  tenantId?: {
    id?: string;
  };
  type?: string;
}
