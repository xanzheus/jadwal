const jadwal = [
  {
    hari: "Senin",
    mapel: ["MTK", "PJOK", "PABP", "null"],
  },
  {
    hari: "Selasa",
    mapel: [
      "PAZW",
      "EKFT",
      "null",
      "null",
    ],
  },
  {
    hari: "Rabu",
    mapel: ["PKK", "BK", "PPKT", "null"],
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
