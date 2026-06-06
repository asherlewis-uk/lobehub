import { createGlobalStyle } from 'antd-style';

import antdOverride from './antdOverride';
import global from './global';
import NexumChatTokenStyle from './nexumChatTokens';

const prefixCls = 'ant';

export const GlobalStyle = createGlobalStyle(({ theme }) => [
  global({ prefixCls, token: theme }),
  antdOverride({ prefixCls, token: theme }),
]);

export { NexumChatTokenStyle };
export { shinyTextStyles } from './loading';
export * from './text';
