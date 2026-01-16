import { defaultChartsConfig, defineConfig } from "allure";

const chartLayout = [
  {
    type: "trend",
    dataType: "status",
    mode: "percent",
  },
  {
    type: "trend",
    dataType: "status",
    limit: 10,
  },
  {
    title: "Custom Status Trend",
    type: "trend",
    dataType: "status",
    mode: "percent",
    limit: 15,
  },
  {
    type: "trend",
    dataType: "status",
    limit: 15,
    metadata: {
      executionIdAccessor: (executionOrder) => `build-${executionOrder}`,
      executionNameAccessor: (executionOrder) => `build #${executionOrder}`,
    },
  },
  {
    type: "trend",
    dataType: "severity",
    limit: 15,
  },
  {
    type: "pie",
  },
  {
    type: "pie",
    title: "Custom Pie",
  },
];

export default defineConfig({
  name: "Allure 3 Report Example",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    awesomeAll: {
      import: "@allurereport/plugin-awesome",
      options: {
        reportName: "Very genuine fake tests, no SMS",
        singleFile: false,
        reportLanguage: "en",
        open: true,
        groupBy: ["feature"],
        charts: chartLayout,
      },
      },
  },
  variables: {
    env_variable: "unknown",
    greeting: "¡Hola todos!",
  },
  environments: {},
});
