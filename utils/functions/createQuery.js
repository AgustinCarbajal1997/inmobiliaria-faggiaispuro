const createQuery = (str) => {
  let queryArray = str.split(" ").reduce((ac, item, idx) => {
    if (!item.trim().length) return ac;
    return !idx ? ac + "?q=" + item : ac + "&q=" + item;
  }, "");
  return queryArray;
};
export default createQuery;
