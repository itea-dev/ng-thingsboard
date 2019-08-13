

export interface WidgetsBundle {
  alias?: string;
  createdTime?: number;
  id?: {
    id?: string;
  };
  image?: Array<string>;
  tenantId?: {
    id?: string;
  };
  title?: string;
}

export interface WidgetType {
  alias?: string;
  bundleAlias?: string;
  createdTime?: number;
  descriptor?: string;
  id?: {
    id?: string;
  };
  name?: string;
  tenantId?: {
    id?: string;
  };
}
