export function pathJoin(...parts) {
  const separator = "/";
  replace = new RegExp(`${separator}{1,}`, "g");
  return parts.join(separator).replace(replace, separator);
}
