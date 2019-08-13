
import { EntityId } from './entity-id';
import { ShortCustomerInfo } from './customer';


export interface Dashboard {
  assignedCustomers?: Array<ShortCustomerInfo>;
  configuration?: string;
  createdTime?: number;
  id?: EntityId;
  name?: string;
  tenantId?: EntityId;
  title?: string;
}

export interface DashboardInfo {
  assignedCustomers?: Array<ShortCustomerInfo>;
  createdTime?: number;
  id?: EntityId;
  name?: string;
  tenantId?: EntityId;
  title?: string;
}
