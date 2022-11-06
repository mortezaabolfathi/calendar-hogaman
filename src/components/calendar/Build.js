const BuilderCalender = (value) => {
  const startDay = value.clone().startOf("month").startOf("week");
  // console.log("startDay :", startDay)
  const endDay = value.clone().endOf("month").endOf("week");
  // console.log("endDay :", endDay)
  const day = startDay.clone().subtract(1, "day");
  // console.log("day is :", day.add(1, "day").clone());

  const calender = [];
  while (day.isBefore(endDay, "day")) {
    calender.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }
  return calender;
};

export default BuilderCalender;
