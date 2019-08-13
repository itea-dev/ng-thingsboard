
import { EntityId } from './entity-id';


export interface AuditLog {
  actionData?: string;
  actionFailureDetails?: string;
  actionStatus?: ActionStatusEnum;
  actionType?: ActionTypeEnum;
  createdTime?: number;
  customerId?: EntityId;
  entityId?: EntityId;
  entityName?: string;
  id?: {
    id?: string;
  };
  tenantId?: EntityId;
  userId?: EntityId;
  userName?: string;
}

export type ActionStatusEnum = 'SUCCESS' | 'FAILURE';
export const ActionStatusEnum = {
  SUCCESS: 'SUCCESS' as ActionStatusEnum,
  FAILURE: 'FAILURE' as ActionStatusEnum
};

export type ActionTypeEnum = 'ADDED' | 'DELETED' | 'UPDATED' | 'ATTRIBUTES_UPDATED' | 'ATTRIBUTES_DELETED' |
  'TIMESERIES_DELETED' | 'RPC_CALL' | 'CREDENTIALS_UPDATED' | 'ASSIGNED_TO_CUSTOMER' | 'UNASSIGNED_FROM_CUSTOMER' |
  'ACTIVATED' | 'SUSPENDED' | 'CREDENTIALS_READ' | 'ATTRIBUTES_READ' | 'RELATION_ADD_OR_UPDATE' | 'RELATION_DELETED' |
  'RELATIONS_DELETED' | 'ALARM_ACK' | 'ALARM_CLEAR' | 'ADDED_TO_ENTITY_GROUP' | 'REMOVED_FROM_ENTITY_GROUP'
  | 'REST_API_RULE_ENGINE_CALL';
export const ActionTypeEnum = {
  ADDED: 'ADDED' as ActionTypeEnum,
  DELETED: 'DELETED' as ActionTypeEnum,
  UPDATED: 'UPDATED' as ActionTypeEnum,
  ATTRIBUTESUPDATED: 'ATTRIBUTES_UPDATED' as ActionTypeEnum,
  ATTRIBUTESDELETED: 'ATTRIBUTES_DELETED' as ActionTypeEnum,
  TIMESERIESDELETED: 'TIMESERIES_DELETED' as ActionTypeEnum,
  RPCCALL: 'RPC_CALL' as ActionTypeEnum,
  CREDENTIALSUPDATED: 'CREDENTIALS_UPDATED' as ActionTypeEnum,
  ASSIGNEDTOCUSTOMER: 'ASSIGNED_TO_CUSTOMER' as ActionTypeEnum,
  UNASSIGNEDFROMCUSTOMER: 'UNASSIGNED_FROM_CUSTOMER' as ActionTypeEnum,
  ACTIVATED: 'ACTIVATED' as ActionTypeEnum,
  SUSPENDED: 'SUSPENDED' as ActionTypeEnum,
  CREDENTIALSREAD: 'CREDENTIALS_READ' as ActionTypeEnum,
  ATTRIBUTESREAD: 'ATTRIBUTES_READ' as ActionTypeEnum,
  RELATIONADDORUPDATE: 'RELATION_ADD_OR_UPDATE' as ActionTypeEnum,
  RELATIONDELETED: 'RELATION_DELETED' as ActionTypeEnum,
  RELATIONSDELETED: 'RELATIONS_DELETED' as ActionTypeEnum,
  ALARMACK: 'ALARM_ACK' as ActionTypeEnum,
  ALARMCLEAR: 'ALARM_CLEAR' as ActionTypeEnum,
  ADDEDTOENTITYGROUP: 'ADDED_TO_ENTITY_GROUP' as ActionTypeEnum,
  REMOVEDFROMENTITYGROUP: 'REMOVED_FROM_ENTITY_GROUP' as ActionTypeEnum,
  RESTAPIRULEENGINECALL: 'REST_API_RULE_ENGINE_CALL' as ActionTypeEnum
};
