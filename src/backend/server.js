const express = require("express");
const axios = require("axios");
const app = express();
const config = require("./config");

app.post("/github-webhook", (req, res) => {
  const { commits } = req.body;
  commits.forEach((commit) => {
    const message = commit.message;
    const match = message.match(/^\[(\w+)\],(\d+),(.*)$/);
    if (match) {
      const ticket = match[1];
      const time = match[2];
      const description = match[3];

      // JIRA Tempo API request
      axios
        .post(
          `https://${config.jiraDomain}/rest/tempo-timesheets/3/worklog`,
          {
            "issue.key": ticket,
            timeSpentSeconds: time * 60,
            description: description,
            startDate: new Date(commit.timestamp).toISOString(),
          },
          {
            auth: {
              username: config.jiraUsername,
              password: config.jiraPassword,
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(`Logged time for ${ticket}: ${time} minutes`);
        })
        .catch((error) => {
          console.error(`Error logging time for ${ticket}: ${error.message}`);
        });
    }
  });

  res.status(200).send("Webhook processed");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
