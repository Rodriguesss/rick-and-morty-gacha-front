export default function setAnimationTimeInCurrentWay(id) {
  const second = ((5 * id) + 50) - 5;
  const time = second.toString().split("");
  time.push(time[1]);
  time[1] = ".";
  time.push("s");
  return time.join().replaceAll(",", "")
}