

export interface ComponentDescriptor {
  actions?: string;
  clazz?: string;
  configurationDescriptor?: string;
  createdTime?: number;
  id?: {
    id?: string;
  };
  name?: string;
  scope?: ScopeEnum;
  type?: ComponentDescriptorTypeEnum;
}

export type ScopeEnum = 'SYSTEM' | 'TENANT';
export const ScopeEnum = {
  SYSTEM: 'SYSTEM' as ScopeEnum,
  TENANT: 'TENANT' as ScopeEnum
};

export type ComponentDescriptorTypeEnum = 'ENRICHMENT' | 'FILTER' | 'TRANSFORMATION' | 'ACTION' | 'ANALYTICS' | 'EXTERNAL';
export const ComponentDescriptorTypeEnum = {
  ENRICHMENT: 'ENRICHMENT' as ComponentDescriptorTypeEnum,
  FILTER: 'FILTER' as ComponentDescriptorTypeEnum,
  TRANSFORMATION: 'TRANSFORMATION' as ComponentDescriptorTypeEnum,
  ACTION: 'ACTION' as ComponentDescriptorTypeEnum,
  ANALYTICS: 'ANALYTICS' as ComponentDescriptorTypeEnum,
  EXTERNAL: 'EXTERNAL' as ComponentDescriptorTypeEnum
};
