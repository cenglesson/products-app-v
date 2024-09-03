import React, { useMemo } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { SpinnerSize, SPINNERSIZES } from "./Spinner.type";

interface SpinnerProps {
  size?: SpinnerSize;
  loading?: boolean;
}
export const Spinner = ({
  size = SPINNERSIZES.medium,
  loading,
}: SpinnerProps) => {
  const sizeValueMap = useMemo(() => {
    return {
      [SPINNERSIZES.small]: 24,
      [SPINNERSIZES.medium]: 48,
      [SPINNERSIZES.large]: 64,
    };
  }, []);

  return loading ? (
    <Spin
      indicator={
        <LoadingOutlined spin={true} style={{ fontSize: sizeValueMap[size] }} />
      }
    />
  ) : (
    <></>
  );
};
