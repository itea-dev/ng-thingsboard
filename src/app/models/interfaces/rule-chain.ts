
import { NodeConnectionInfo } from './node-connection-info';
import { RuleNode } from './rule-node';

export interface RuleChain {
  additionalInfo?: string;
  configuration?: string;
  createdTime?: number;
  debugMode?: boolean;
  firstRuleNodeId?: {
    id?: string;
  };
  id?: {
    id?: string;
  };
  name?: string;
  root?: boolean;
  tenantId?: {
    id?: string;
  };
}

export interface RuleChainConnectionInfo {
  additionalInfo?: string;
  fromIndex?: number;
  targetRuleChainId?: {
    id?: string;
  };
  type?: string;
}

export interface RuleChainMetaData {
  connections?: Array<NodeConnectionInfo>;
  firstNodeIndex?: number;
  nodes?: Array<RuleNode>;
  ruleChainConnections?: Array<RuleChainConnectionInfo>;
  ruleChainId?: {
    id?: string;
  };
}
