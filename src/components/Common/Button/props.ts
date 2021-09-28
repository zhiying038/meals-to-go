import { ReactNode } from "react";

export type Props = {
  label: string;
  block?: boolean;
  center?: boolean;
  buttonIcon?: ReactNode;
  labelClassName?: string;
  wrapperClassName?: string;
  touchableClassName?: string;
  onPress?: (...args: any[]) => any;
};
