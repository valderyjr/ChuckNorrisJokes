enum DaysOfWeek {
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
}

export const transformData = (data: string): String => {
  const newDate = new Date(data);
  const day = newDate.getDate();
  const mounth = newDate.getMonth();
  const year = newDate.getFullYear();
  return `${day} de ${DaysOfWeek[mounth]} de ${year}`;
};
