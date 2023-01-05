import { useState } from "react";

/**
 * Editing hooks
 * @returns
 */
type EditingProps<T> = {
  data: T[];
};
export function useEditing<T extends { _id?: string }>({
  data,
}: EditingProps<T>) {
  const [editData, setEditData] = useState<T | null>(null);

  const onEditHandler = (row: T) => {
    const record = data.find((item: T) => item._id === row._id);
    setEditData(record!);
  };

  const onCancelEditing = () => {
    setEditData(null);
  };

  return {
    editData,
    onEditHandler,
    onCancelEditing,
  };
}
