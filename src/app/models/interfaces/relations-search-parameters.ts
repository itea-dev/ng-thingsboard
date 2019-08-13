
export interface RelationsSearchParameters {
  rootId: string;
  rootType: RootTypeEnum;
  direction: DirectionEnum;
  relationTypeGroup: RelationTypeGroupEnum;
  maxLevel: number;
}

export type RootTypeEnum = 'TENANT' | 'CUSTOMER' | 'USER' | 'DASHBOARD' | 'ASSET' | 'DEVICE' | 'ALARM' | 'ENTITY_GROUP' |
  'CONVERTER' | 'INTEGRATION' | 'RULE_CHAIN' | 'RULE_NODE' | 'SCHEDULER_EVENT' | 'BLOB_ENTITY' | 'ENTITY_VIEW';
export const RootTypeEnum = {
  TENANT: 'TENANT' as RootTypeEnum,
  CUSTOMER: 'CUSTOMER' as RootTypeEnum,
  USER: 'USER' as RootTypeEnum,
  DASHBOARD: 'DASHBOARD' as RootTypeEnum,
  ASSET: 'ASSET' as RootTypeEnum,
  DEVICE: 'DEVICE' as RootTypeEnum,
  ALARM: 'ALARM' as RootTypeEnum,
  ENTITYGROUP: 'ENTITY_GROUP' as RootTypeEnum,
  CONVERTER: 'CONVERTER' as RootTypeEnum,
  INTEGRATION: 'INTEGRATION' as RootTypeEnum,
  RULECHAIN: 'RULE_CHAIN' as RootTypeEnum,
  RULENODE: 'RULE_NODE' as RootTypeEnum,
  SCHEDULEREVENT: 'SCHEDULER_EVENT' as RootTypeEnum,
  BLOBENTITY: 'BLOB_ENTITY' as RootTypeEnum,
  ENTITYVIEW: 'ENTITY_VIEW' as RootTypeEnum
};

export type DirectionEnum = 'FROM' | 'TO';
export const DirectionEnum = {
  FROM: 'FROM' as DirectionEnum,
  TO: 'TO' as DirectionEnum
};

export type RelationTypeGroupEnum = 'COMMON' | 'ALARM' | 'DASHBOARD' | 'TO_ENTITY_GROUP' | 'FROM_ENTITY_GROUP' |
  'RULE_CHAIN' | 'RULE_NODE';
export const RelationTypeGroupEnum = {
  COMMON: 'COMMON' as RelationTypeGroupEnum,
  ALARM: 'ALARM' as RelationTypeGroupEnum,
  DASHBOARD: 'DASHBOARD' as RelationTypeGroupEnum,
  TOENTITYGROUP: 'TO_ENTITY_GROUP' as RelationTypeGroupEnum,
  FROMENTITYGROUP: 'FROM_ENTITY_GROUP' as RelationTypeGroupEnum,
  RULECHAIN: 'RULE_CHAIN' as RelationTypeGroupEnum,
  RULENODE: 'RULE_NODE' as RelationTypeGroupEnum
};
