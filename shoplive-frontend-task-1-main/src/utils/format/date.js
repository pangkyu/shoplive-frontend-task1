const date = (createAt) => {
  const timestamp = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(createAt);
  return timestamp;
};

export default date;
