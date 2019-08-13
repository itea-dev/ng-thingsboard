
export interface EntityId {
  entityType?: EntityTypeEnum;
  id?: string;
}
export type EntityTypeEnum = 'TENANT' | 'CUSTOMER' | 'USER' | 'DASHBOARD' | 'ASSET' | 'DEVICE' | 'ALARM' | 'ENTITY_GROUP' |
  'CONVERTER' | 'INTEGRATION' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'BLOB_ENTITY' | 'ENTITY_VIEW';
export const EntityTypeEnum = {
  TENANT: 'TENANT' as EntityTypeEnum,
  CUSTOMER: 'CUSTOMER' as EntityTypeEnum,
  USER: 'USER' as EntityTypeEnum,
  DASHBOARD: 'DASHBOARD' as EntityTypeEnum,
  ASSET: 'ASSET' as EntityTypeEnum,
  DEVICE: 'DEVICE' as EntityTypeEnum,
  ALARM: 'ALARM' as EntityTypeEnum,
  ENTITYGROUP: 'ENTITY_GROUP' as EntityTypeEnum,
  CONVERTER: 'CONVERTER' as EntityTypeEnum,
  INTEGRATION: 'INTEGRATION' as EntityTypeEnum,
  RULECHAIN: 'RULE_CHAIN' as EntityTypeEnum,
  RULENODE: 'RULE_NODE' as EntityTypeEnum,
  SCHEDULEREVENT: 'SCHEDULER_EVENT' as EntityTypeEnum,
  BLOBENTITY: 'BLOB_ENTITY' as EntityTypeEnum,
  ENTITYVIEW: 'ENTITY_VIEW' as EntityTypeEnum
};
