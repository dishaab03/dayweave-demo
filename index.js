const { buildDayPlan } = require("dayweave-core");

const tasks = [
  {
    id: "assignment",
    title: "Complete ADA assignment",
    estimateMinutes: 60,
    impact: 5,
    dueAt: "2026-11-18T18:00:00+05:30",
    energy: "high"
  },
  {
    id: "revision",
    title: "Revise DBMS notes",
    estimateMinutes: 30,
    impact: 3,
    energy: "medium"
  },
  {
    id: "practice",
    title: "Solve coding questions",
    estimateMinutes: 45,
    impact: 4,
    energy: "high"
  }
];

const plan = buildDayPlan(tasks, {
  availableMinutes: 120,
  startAt: new Date("2026-11-17T14:00:00+05:30"),
  now: new Date("2026-11-17T14:00:00+05:30"),
  energyLevel: "high",
  breakEveryMinutes: 60,
  breakMinutes: 10
});

console.log("\nDAYWEAVE DEMO");
console.log("=============");
console.log(JSON.stringify(plan, null, 2));
