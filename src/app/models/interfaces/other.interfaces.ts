
export interface URI {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

export interface URL {
  authority?: string;
  content?: any;
  defaultPort?: number;
  file?: string;
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  userInfo?: string;
}

export interface UpdateMessage {
  message?: string;
  updateAvailable?: boolean;
}

export interface Resource {
  description?: string;
  file?: Blob;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: URI;
  url?: URL;
}

export interface InputStream { }

export interface DeferredResultResponseEntity {
  result?: any;
  setOrExpired?: boolean;
}

export interface Favicon {
  type?: string;
  url?: string;
}

export interface Palette {
  colors?: { [key: string]: string; };
  _extends?: string;
  type?: string;
}


export interface PaletteSettings {
  accentPalette?: Palette;
  primaryPalette?: Palette;
}

export interface WhiteLabelingParams {
  appTitle?: string;
  enableHelpLinks?: boolean;
  favicon?: Favicon;
  faviconChecksum?: string;
  helpLinkBaseUrl?: string;
  logoImageChecksum?: string;
  logoImageHeight?: number;
  logoImageUrl?: string;
  paletteSettings?: PaletteSettings;
}

export interface CustomTranslation {
  translationMap?: { [key: string]: string; };
}

export interface AdminSettings {
  createdTime?: number;
  id?: {
    id?: string;
  };
  jsonValue?: string;
  key?: string;
}

export interface BlobEntityInfo {
  additionalInfo?: string;
  contentType?: string;
  createdTime?: number;
  customerId?: {
    id?: string;
  };
  id?: {
    id?: string;
  };
  name?: string;
  tenantId?: {
    id?: string;
  };
  type?: string;
}



export interface ResponseEntity {
  body?: any;
  statusCode?: StatusCodeEnum;
  statusCodeValue?: number;
}

export type StatusCodeEnum = '100' | '101' | '102' | '103' | '200' | '201' | '202' | '203' | '204' | '205' | '206' |
  '207' | '208' | '226' | '300' | '301' | '302' | '303' | '304' | '305' | '307' | '308' | '400' | '401' | '402' | '403' |
  '404' | '405' | '406' | '407' | '408' | '409' | '410' | '411' | '412' | '413' | '414' | '415' | '416' | '417' | '418' |
  '419' | '420' | '421' | '422' | '423' | '424' | '426' | '428' | '429' | '431' | '451' | '500' | '501' | '502' | '503' |
  '504' | '505' | '506' | '507' | '508' | '509' | '510' | '511';
export const StatusCodeEnum = {
  _100: '100' as StatusCodeEnum,
  _101: '101' as StatusCodeEnum,
  _102: '102' as StatusCodeEnum,
  _103: '103' as StatusCodeEnum,
  _200: '200' as StatusCodeEnum,
  _201: '201' as StatusCodeEnum,
  _202: '202' as StatusCodeEnum,
  _203: '203' as StatusCodeEnum,
  _204: '204' as StatusCodeEnum,
  _205: '205' as StatusCodeEnum,
  _206: '206' as StatusCodeEnum,
  _207: '207' as StatusCodeEnum,
  _208: '208' as StatusCodeEnum,
  _226: '226' as StatusCodeEnum,
  _300: '300' as StatusCodeEnum,
  _301: '301' as StatusCodeEnum,
  _302: '302' as StatusCodeEnum,
  _303: '303' as StatusCodeEnum,
  _304: '304' as StatusCodeEnum,
  _305: '305' as StatusCodeEnum,
  _307: '307' as StatusCodeEnum,
  _308: '308' as StatusCodeEnum,
  _400: '400' as StatusCodeEnum,
  _401: '401' as StatusCodeEnum,
  _402: '402' as StatusCodeEnum,
  _403: '403' as StatusCodeEnum,
  _404: '404' as StatusCodeEnum,
  _405: '405' as StatusCodeEnum,
  _406: '406' as StatusCodeEnum,
  _407: '407' as StatusCodeEnum,
  _408: '408' as StatusCodeEnum,
  _409: '409' as StatusCodeEnum,
  _410: '410' as StatusCodeEnum,
  _411: '411' as StatusCodeEnum,
  _412: '412' as StatusCodeEnum,
  _413: '413' as StatusCodeEnum,
  _414: '414' as StatusCodeEnum,
  _415: '415' as StatusCodeEnum,
  _416: '416' as StatusCodeEnum,
  _417: '417' as StatusCodeEnum,
  _418: '418' as StatusCodeEnum,
  _419: '419' as StatusCodeEnum,
  _420: '420' as StatusCodeEnum,
  _421: '421' as StatusCodeEnum,
  _422: '422' as StatusCodeEnum,
  _423: '423' as StatusCodeEnum,
  _424: '424' as StatusCodeEnum,
  _426: '426' as StatusCodeEnum,
  _428: '428' as StatusCodeEnum,
  _429: '429' as StatusCodeEnum,
  _431: '431' as StatusCodeEnum,
  _451: '451' as StatusCodeEnum,
  _500: '500' as StatusCodeEnum,
  _501: '501' as StatusCodeEnum,
  _502: '502' as StatusCodeEnum,
  _503: '503' as StatusCodeEnum,
  _504: '504' as StatusCodeEnum,
  _505: '505' as StatusCodeEnum,
  _506: '506' as StatusCodeEnum,
  _507: '507' as StatusCodeEnum,
  _508: '508' as StatusCodeEnum,
  _509: '509' as StatusCodeEnum,
  _510: '510' as StatusCodeEnum,
  _511: '511' as StatusCodeEnum
};

export interface ReportConfig {
  baseUrl?: string;
  dashboardId?: string;
  namePattern?: string;
  state?: string;
  timewindow?: string;
  timezone?: string;
  type?: string;
  useCurrentUserCredentials?: boolean;
  useDashboardTimewindow?: boolean;
  userId?: string;
}

export interface ModelFile {
  absolute?: boolean;
  absoluteFile?: Blob;
  absolutePath?: string;
  canonicalFile?: Blob;
  canonicalPath?: string;
  directory?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  name?: string;
  parent?: string;
  parentFile?: Blob;
  path?: string;
  totalSpace?: number;
  usableSpace?: number;
}
