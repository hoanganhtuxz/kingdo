export function GroupArr(data, n) {
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
}
// export const Url = (image) => {
//   return `https://demo-api-kinhdo.aivgroup.vn${image}`;
// };
export const Url = (image) => {
  return `${process.env.NEXT_PUBLIC_APP_API_IMG}${image}`;
};
