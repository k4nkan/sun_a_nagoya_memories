const layouts = [
  // day 1
  [
    [
      { top: 0, left: 0, z: 10, transform: "rotate(-2deg)" },
      { top: -160, left: -120, z: 9, transform: "rotate(6deg)" },
      { top: 130, left: -180, z: 8, transform: "rotate(-4deg)" },
      { top: -150, left: 170, z: 7, transform: "rotate(8deg)" },
      { top: 170, left: 150, z: 6, transform: "rotate(-3deg)" },
      { top: -100, left: 250, z: 5, transform: "rotate(5deg)" },
      { top: 200, left: -90, z: 4, transform: "rotate(-5deg)" },
      { top: 120, left: 230, z: 3, transform: "rotate(7deg)" },
      { top: -220, left: 60, z: 2, transform: "rotate(-6deg)" },
      { top: 60, left: -240, z: 1, transform: "rotate(3deg)" },
    ],
    [],
    [],
  ],

  // day 2
  [[], [], []],

  // day 3
  [[], [], []],

  // day 4
  [[], [], []],

  // day 5
  [[], [], []],

  // day 6
  [[], [], []],

  // day 7
  [[], [], []],

  // day 8
  [[], [], []],

  // day 9
  [[], [], []],

  // day 10
  [[], [], []],
];

export function getLayouts(day, length) {
  const dayIndex = parseInt(day.replace("day", ""), 10) - 1;
  let columnIndex = null;

  if (0 < length || length < 11) {
    columnIndex = 0;
  } else if (10 < length || length < 21) {
    columnIndex = 1;
  } else if (20 < length || length < 31) {
    columnIndex = 1;
  } else {
    return null;
  }

  return layouts[dayIndex][columnIndex];
}
