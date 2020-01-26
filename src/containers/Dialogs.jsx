import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(items));

  const onChangeInput = value => {
    setFiltred(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setSearchValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={searchValue}
    />
  );
};

export default Dialogs;
