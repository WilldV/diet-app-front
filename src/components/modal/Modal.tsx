import { FC, PropsWithChildren } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { IconButton } from "../icon-button/IconButton";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  // onOpen: () => void;
  children: React.ReactNode;
}

export const Modal: FC<PropsWithChildren & ModalProps> = ({
  children: Children,
  open,
  handleClose,
}) => {
  return (
    <>
      {open && (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div className="bg-white w-4/5 lg:w-1/5 rounded-md text-center">
            <div className="flex justify-end p-2 pb-0">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="p-2">{Children}</div>
          </div>
        </div>
      )}
    </>
  );
};
