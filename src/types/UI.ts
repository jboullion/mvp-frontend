import { RenderFunction } from 'vue';
export interface DropdownOption {
  label: string;
  value: string | number;
}

export interface NavChildItem {
  name: string;
  to: string;
}

export interface NavigationItem {
  name: string;
  icon: RenderFunction;
  to?: string;
  children?: NavChildItem[];
}

export interface ITabNav {
  name: string;
  target: string;
}
