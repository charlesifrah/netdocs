import type { ComponentProps, ReactNode } from 'react';
import {
  ZephyrIcon,
  BaremetalIcon,
  ReactIcon,
  AngularIcon,
  AndroidIcon,
  AppleIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
      section: false;
    }
  | {
      section: string;
      icon: (props: ComponentProps<'svg'>) => ReactNode;
      name: string;
    }
);

const SECTIONS: Section[] = [
  {
    name: 'Zephyr',
    docId: 'zephyr',
    icon: ZephyrIcon,
    section: 'ble-devices-rtos',
  },
  {
    name: 'Baremetal',
    docId: 'baremetal',
    icon: BaremetalIcon,
    section: 'ble-devices-baremetal',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'BLE Devices RTOS',
      section: 'ble-devices-rtos',
      description: 'Guides and reference for integrating BLE devices in RTOS-based environments.',
    },
    {
      name: 'BLE Devices Baremetal',
      section: 'ble-devices-baremetal',
      description: 'Documentation and best practices for BLE integration on bare-metal platforms.',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
