
export interface User {
  additionalInfo?: string;
  authority?: AuthorityEnum;
  createdTime?: number;
  customerId?: {
    id?: string;
  };
  email?: string;
  firstName?: string;
  id?: {
    id?: string;
  };
  lastName?: string;
  name?: string;
  tenantId?: {
    id?: string;
  };
}

export type AuthorityEnum = 'SYS_ADMIN' | 'TENANT_ADMIN' | 'CUSTOMER_USER' | 'REFRESH_TOKEN';
export const AuthorityEnum = {
  SYSADMIN: 'SYS_ADMIN' as AuthorityEnum,
  TENANTADMIN: 'TENANT_ADMIN' as AuthorityEnum,
  CUSTOMERUSER: 'CUSTOMER_USER' as AuthorityEnum,
  REFRESHTOKEN: 'REFRESH_TOKEN' as AuthorityEnum
};
