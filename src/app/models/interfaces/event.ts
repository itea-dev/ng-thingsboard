
import { EntityId } from './entity-id';


export interface Event {
  body?: string;
  createdTime?: number;
  entityId?: EntityId;
  id?: {
    id?: string;
  };
  tenantId?: {
    id?: string;
  };
  type?: string;
  uid?: string;
}
