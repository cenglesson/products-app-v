export const SPINNERSIZES = {
  small: "sm",
  medium: "md",
  large: "lg",
} as const;

export type SpinnerSize = (typeof SPINNERSIZES)[keyof typeof SPINNERSIZES];
