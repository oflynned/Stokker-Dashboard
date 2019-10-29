import React from 'react';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarSection,
  TopAppBarActionItem
} from '@rmwc/top-app-bar';

import { ReactComponent as MenuIcon } from '../assets/images/menu-24px.svg';
import { ReactComponent as LogOutIcon } from '../assets/images/exit_to_app-24px.svg';

const TopBar = () =>
  <TopAppBar short>
    <TopAppBarRow>
      <TopAppBarSection>
        <TopAppBarNavigationIcon icon=<MenuIcon/>/>
        <TopAppBarTitle>Stokker</TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection alignEnd>
        <TopAppBarActionItem icon=<LogOutIcon/>/>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>;

export default TopBar;
