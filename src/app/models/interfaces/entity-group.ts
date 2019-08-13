

export interface EntityGroup {
  additionalInfo?: string;
  configuration?: string;
  createdTime?: number;
  groupAll?: boolean;
  id?: {
    id?: string;
  };
  name: string;
  type: EntityGroupTypeEnum;
}

export type EntityGroupTypeEnum = 'CUSTOMER' | 'ASSET' | 'DEVICE';
export const EntityGroupTypeEnum = {
  CUSTOMER: 'CUSTOMER' as EntityGroupTypeEnum,
  ASSET: 'ASSET' as EntityGroupTypeEnum,
  DEVICE: 'DEVICE' as EntityGroupTypeEnum
};
