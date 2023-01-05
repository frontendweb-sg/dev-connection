import { ActionStatus } from "../../types";
import { AppContent } from "../../util/AppContent";
import Dropdown from "../Dropdown";
import TableCell from "./TableCell";

type TableActionProps<T> = {
  data: T;
  onAction?: (type: ActionStatus, body: T) => void;
};

/**
 * Table action component
 * @param props
 * @returns
 */
const TableAction = <T extends { _id: string }>({
  data,
  onAction,
}: TableActionProps<T>) => {
  return (
    <TableCell tag="td">
      <Dropdown>
        <Dropdown.Item icon="eye" onClick={() => onAction?.("active", data)}>
          {AppContent.activeText}
        </Dropdown.Item>
        <Dropdown.Item icon="eye" onClick={() => onAction?.("inactive", data)}>
          {AppContent.inactiveText}
        </Dropdown.Item>
        <Dropdown.Item icon="edit" onClick={() => onAction?.("edit", data)}>
          {AppContent.editText}
        </Dropdown.Item>
        <Dropdown.Item icon="trash" onClick={() => onAction?.("delete", data)}>
          {AppContent.deleteText}
        </Dropdown.Item>
      </Dropdown>
    </TableCell>
  );
};

export default TableAction;
