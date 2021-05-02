export default function generateKey(prefix) {
  const stamp = new Date().getTime();
  return prefix + "_" + stamp;
}
