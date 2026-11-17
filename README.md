# Dayweave Demo

A small project built to demonstrate **Dayweave Core**, my JavaScript package for creating smarter, more realistic daily schedules.

## What is this?

Planning a day sounds simple until you have more tasks than time.

You have assignments to finish, topics to revise, coding questions to practise, and somehow everything feels equally urgent.

That's the problem I wanted to explore with Dayweave.

Dayweave Core takes a list of tasks and creates a schedule based on factors like deadlines, importance, estimated effort and energy levels. Instead of simply listing tasks, it helps decide what deserves attention first and what can realistically fit into the available time.

This repository is a demonstration of how the published `dayweave-core` NPM package can be used in another JavaScript project.

## What does the demo do?

The demo creates a sample list of tasks, passes them to the Dayweave Core planning engine and displays the generated schedule in the terminal.

It demonstrates:

- **Task prioritisation:** Tasks are ranked using their importance, deadlines, estimated effort and energy requirements.
- **Time-based planning:** Creates a schedule based on the time available.
- **Scheduled breaks:** Adds breaks between focus sessions.
- **Unscheduled tasks:** Identifies tasks that cannot fit into the available time and explains why.
- **Readable output:** Displays the generated plan, including task details, timings and remaining available minutes.

## Tech Stack

- JavaScript
- Node.js
- NPM
- Dayweave Core (`dayweave-core`)

No additional runtime dependencies are required by Dayweave Core.

## Getting Started

Want to run the demo locally? Here's how.

### 1. Clone the repository

```bash
git clone https://github.com/dishaab03/dayweave-demo.git
```

### 2. Navigate into the project

```bash
cd dayweave-demo
```

### 3. Install dependencies

```bash
npm install
```

This installs Dayweave Core using the dependency listed in `package.json`.

### 4. Run the demo

```bash
npm run demo
```

You should see the generated daily plan printed directly in your terminal.

**Requirement:** Node.js 18 or newer.

## How it works

The project imports the `buildDayPlan()` function from the published package:

```js
const { buildDayPlan } = require("dayweave-core");
```

A list of sample tasks is then created, with each task containing information such as:

- A unique ID
- Task title
- Estimated completion time
- Impact level
- Deadline (where applicable)
- Energy requirement

The task list is passed to `buildDayPlan()` along with the available time, starting time, energy level and break preferences.

The package processes these inputs and returns a structured plan containing scheduled tasks, breaks, unscheduled tasks and the remaining time.

## Project Structure

```text
dayweave-demo/
│
├── index.js          # Demo implementation
├── package.json      # Project configuration and scripts
