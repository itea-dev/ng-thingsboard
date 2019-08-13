
import { Favicon, PaletteSettings } from './other.interfaces';


export interface LoginWhiteLabelingParams {
  adminSettingsId?: string;
  appTitle?: string;
  darkForeground?: boolean;
  domainName?: string;
  enableHelpLinks?: boolean;
  favicon?: Favicon;
  faviconChecksum?: string;
  helpLinkBaseUrl?: string;
  logoImageChecksum?: string;
  logoImageHeight?: number;
  logoImageUrl?: string;
  pageBackgroundColor?: string;
  paletteSettings?: PaletteSettings;
}
