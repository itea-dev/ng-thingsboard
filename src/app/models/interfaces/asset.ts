
import { RelationsSearchParameters } from './relations-search-parameters';
import { EntityId } from './entity-id';


export interface Asset {
  additionalInfo?: string;
  createdTime?: number;
  customerId?: EntityId;
  id?: EntityId;
  name?: string;
  tenantId?: EntityId;
  type?: string;
}

export interface AssetSearchQuery {
  assetTypes?: Array<string>;
  parameters?: RelationsSearchParameters;
  relationType?: string;
}
