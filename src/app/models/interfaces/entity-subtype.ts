import { EntityTypeEnum } from './entity-id';


export interface EntitySubtype {
  entityType?: EntityTypeEnum;
  tenantId?: {
    id: string;
  };
  type?: string;
}
