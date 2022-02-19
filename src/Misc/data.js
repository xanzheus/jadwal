const jadwal = [
  {
    hari: "Senin",
    mapel: ["MTK", "PJOK", "PABP", ""],
  },
  {
    hari: "Selasa",
    mapel: [
      "PAZW",
      "EKFT",
      "",
      "",
    ],
  },
  {
    hari: "Rabu",
    mapel: ["PKK", "BK", "PPKT", ""],
  },
  {
    hari: "Kamis",
    mapel: [
      "PKK",
      "PPKN",
      "EKFT",
      "B.INDO",
    ],
  },
  {
    hari: "Jum'at",
    mapel: ["B.INGGRIS", "PPKT", "SUNDA", "PAZW"],
  },
  {
    hari: "Sabtu",
    mapel: ["LIBUR", "ya", "ges", "ya"],
  },
  {
    hari: "Minggu",
    mapel: ["LIBUR", "ya", "ges", "ya"],
  },
];

const longest = jadwal
  .map(({ mapel }) => mapel.length)
  .sort((a, b) => b - a)[0];
const newArray = Array.from(new Array(longest));

export default jadwal;
export const columnRemap = newArray.map((_, idx) =>
  jadwal.map((data) => ({
    mapel: data.mapel[idx],
    index: jadwal.findIndex((x) => x.hari === data.hari) + 1,
  }))
);
