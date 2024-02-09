import React from "react";

const sizeClasses = {
  txtCriteriaCFLight30: "font-criteriacf font-light",
  txtCriteriaCFRegular28: "font-criteriacf font-normal",
  txtCriteriaCFLight32: "font-criteriacf font-light",
  txtCriteriaCFExtraBold24: "font-criteriacf font-extrabold",
  txtCriteriaCFBold50: "font-bold font-criteriacf",
  txtInterRegular20: "font-inter font-normal",
  txtCriteriaCFLight24: "font-criteriacf font-light",
  txtPlainBoldRegular32: "font-bold font-plain",
  txtCriteriaCFBold48: "font-bold font-criteriacf",
  txtCriteriaCFDemiBold24: "font-criteriacf font-semibold",
  txtCriteriaCFMedium40: "font-criteriacf font-medium",
  txtCriteriaCFMedium50: "font-criteriacf font-medium",
  txtCriteriaCFRegular64Deeporange400: "font-criteriacf font-normal",
  txtPlainLightRegular20: "font-light font-plain",
  txtCriteriaCFRegular40: "font-criteriacf font-normal",
  txtCriteriaCFMedium20: "font-criteriacf font-medium",
  txtCriteriaCFRegular64: "font-criteriacf font-normal",
  txtCriteriaCFMedium48: "font-criteriacf font-medium",
  txtCriteriaCFRegular20: "font-criteriacf font-normal",
  txtInterRegular22: "font-inter font-normal",
  txtCriteriaCFMedium14: "font-criteriacf font-medium",
  txtCriteriaCFRegular24: "font-criteriacf font-normal",
  txtCriteriaCFDemiBold28: "font-criteriacf font-semibold",
  txtCriteriaCFMedium20WhiteA700: "font-criteriacf font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
