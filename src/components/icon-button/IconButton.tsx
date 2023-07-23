import { FC, PropsWithChildren } from "react";

interface IconButtonProps {
  onClick: () => void;
}

export const IconButton: FC<PropsWithChildren & IconButtonProps> = ({
  children: Children,
  onClick,
}) => {
  return <button onClick={() => onClick()}>{Children}</button>;
};
