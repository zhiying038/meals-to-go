import classnames from "classnames";
import { tw } from "config/tailwind";
import { Props } from "./props";

export const useStyles = (props: Props) => {
  const {
    block = false,
    center = false,
    touchableClassName,
    wrapperClassName,
    labelClassName,
  } = props;

  const wrapperStyle = [tw(classnames("flex-row", wrapperClassName))];

  const touchableStyle = [
    tw(
      classnames(
        "justify-center content-center rounded-lg",
        {
          "flex-auto": block,
          "items-center": center,
        },
        touchableClassName
      )
    ),
  ];

  const labelStyle = [tw(labelClassName)];

  return { wrapperStyle, touchableStyle, labelStyle };
};
