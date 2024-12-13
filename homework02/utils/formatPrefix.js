const formatPrefix = (prefix, colorFn, isEnable = "0") => {
  const colorPrefix = `${colorFn(prefix)}${colorFn(":")}`;
  const colonPrefix = `${prefix}:`;

  if (isEnable === "1") {
    return colorPrefix;
  }
  if (isEnable === "0") {
    return colonPrefix;
  }
};

export default formatPrefix;
