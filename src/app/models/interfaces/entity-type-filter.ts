

export interface EntityTypeFilter {
  relationType: string;
  entityTypes: Array<EntityTypesEnum>;
}

export type EntityTypesEnum = 'TENANT' | 'CUSTOMER' | 'USER' | 'DASHBOARD' | 'ASSET' | 'DEVICE' | 'ALARM' |
  'ENTITY_GROUP' | 'CONVERTER' | 'INTEGRATION' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'BLOB_ENTITY' |
  'ENTITY_VIEW';
export const EntityTypesEnum = {
  TENANT: 'TENANT' as EntityTypesEnum,
  CUSTOMER: 'CUSTOMER' as EntityTypesEnum,
  USER: 'USER' as EntityTypesEnum,
  DASHBOARD: 'DASHBOARD' as EntityTypesEnum,
  ASSET: 'ASSET' as EntityTypesEnum,
  DEVICE: 'DEVICE' as EntityTypesEnum,
  ALARM: 'ALARM' as EntityTypesEnum,
  ENTITYGROUP: 'ENTITY_GROUP' as EntityTypesEnum,
  CONVERTER: 'CONVERTER' as EntityTypesEnum,
  INTEGRATION: 'INTEGRATION' as EntityTypesEnum,
  RULECHAIN: 'RULE_CHAIN' as EntityTypesEnum,
  RULENODE: 'RULE_NODE' as EntityTypesEnum,
  SCHEDULEREVENT: 'SCHEDULER_EVENT' as EntityTypesEnum,
  BLOBENTITY: 'BLOB_ENTITY' as EntityTypesEnum,
  ENTITYVIEW: 'ENTITY_VIEW' as EntityTypesEnum
};
