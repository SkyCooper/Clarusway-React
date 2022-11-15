import React, { memo } from "react";

//! react memo kullanmanın 2 yöntemi var,

//! 2ncisi async yazdığımız gibi fonksiyon başına memo yazmak;
const HeaderMemo = ({ count }) => {
  console.log("Render => HeaderMemo Components");
  return (
    <div className="bg-danger text-center">HeaderMemo Componenti : {count}</div>
  );
};

//! 1ncisi export edilen yerde fonksiyonu memo içine koymak --> memo(ClerarButton)
export default memo(HeaderMemo);
