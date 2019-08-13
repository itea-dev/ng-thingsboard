
import { EntityId } from './entity-id';


export interface Customer {
  additionalInfo?: string;
  address?: string;
  address2?: string;
  city?: string;
  country?: string;
  createdTime?: number;
  email?: string;
  id?: EntityId;
  name?: string;
  phone?: string;
  state?: string;
  tenantId?: EntityId;
  title?: string;
  zip?: string;
}

export interface ShortCustomerInfo {
  customerId?: EntityId;
  _public?: boolean;
  title?: string;
  isPublic: boolean;
}
