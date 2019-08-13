
import { EntityId } from './entity-id';
import { EntityTypeFilter } from './entity-type-filter';
import { RelationsSearchParameters } from './relations-search-parameters';

export interface EntityRelation {
  additionalInfo?: string;
  from?: EntityId;
  to?: EntityId;
  type?: string;
  typeGroup?: TypeGroupEnum;
}

export type TypeGroupEnum = 'COMMON' | 'ALARM' | 'DASHBOARD' | 'TO_ENTITY_GROUP' | 'FROM_ENTITY_GROUP' | 'RULE_CHAIN' |
  'RULE_NODE';
export const TypeGroupEnum = {
  COMMON: 'COMMON' as TypeGroupEnum,
  ALARM: 'ALARM' as TypeGroupEnum,
  DASHBOARD: 'DASHBOARD' as TypeGroupEnum,
  TOENTITYGROUP: 'TO_ENTITY_GROUP' as TypeGroupEnum,
  FROMENTITYGROUP: 'FROM_ENTITY_GROUP' as TypeGroupEnum,
  RULECHAIN: 'RULE_CHAIN' as TypeGroupEnum,
  RULENODE: 'RULE_NODE' as TypeGroupEnum
};

export interface EntityRelationInfo {
  additionalInfo?: string;
  from?: EntityId;
  fromName?: string;
  to?: EntityId;
  toName?: string;
  type?: string;
  typeGroup?: TypeGroupEnum;
}

export interface EntityRelationsQuery {
  filters?: Array<EntityTypeFilter>;
  parameters?: RelationsSearchParameters;
}
