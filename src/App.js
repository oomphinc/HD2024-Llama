import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [githubToken, setGithubToken] = useState("");
  const [jiraDomain, setJiraDomain] = useState("");
  const [jiraUsername, setJiraUsername] = useState("");
  const [jiraPassword, setJiraPassword] = useState("");

  useEffect(() => {
    // Load config from backend
    axios
      .get("/config")
      .then((response) => {
        setGithubToken(response.data.githubToken);
        setJiraDomain(response.data.jiraDomain);
        setJiraUsername(response.data.jiraUsername);
        setJiraPassword(response.data.jiraPassword);
      })
      .catch((error) => {
        console.error("Error loading config:", error.message);
      });
  }, []);

  const handleWebhook = (event) => {
    // Forward webhook to backend
    axios
      .post("/github-webhook", event)
      .then((response) => {
        console.log("Webhook forwarded");
      })
      .catch((error) => {
        console.error("Error forwarding webhook:", error.message);
      });
  };

  return (
    <div>
      <h1>Github to JIRA Tempo Integration</h1>
      <form>
        <label>Github Token:</label>
        <input
          type="text"
          value={githubToken}
          onChange={(e) => setGithubToken(e.target.value)}
        />
        <br />
        <label>JIRA Domain:</label>
        <input
          type="text"
          value={jiraDomain}
          onChange={(e) => setJiraDomain(e.target.value)}
        />
        <br />
        <label>JIRA Username:</label>
        <input
          type="text"
          value={jiraUsername}
          onChange={(e) => setJiraUsername(e.target.value)}
        />
        <br />
        <label>JIRA Password:</label>
        <input
          type="password"
          value={jiraPassword}
          onChange={(e) => setJiraPassword(e.target.value)}
        />
      </form>
      <button onClick={handleWebhook}>Test Webhook</button>
    </div>
  );
}

export default App;
