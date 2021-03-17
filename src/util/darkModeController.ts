import React from 'react';
import { DarkModeController } from '@smotaal.io/dark-mode-controller/commonjs';

export interface ReactDarkModeController extends DarkModeController {
  onPointerDown(
    event: React.PointerEvent | React.MouseEvent | PointerEvent
  ): void;
  onPointerUp(
    event: React.PointerEvent | React.MouseEvent | PointerEvent
  ): void;
  handleEvent(event?: React.PointerEvent | React.MouseEvent | Event): void;
}

// TODO: Figure out a way around HRM glitching (tackled upstream)
// SEE: https://github.com/SMotaal/meta/issues/7

// We're exporting a singleton
export default new DarkModeController() as ReactDarkModeController;
