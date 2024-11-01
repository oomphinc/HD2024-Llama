import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCommits();
  }, []);

  const fetchCommits = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/repos/oomphinc/HD2024-Llama/commits`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      const commitMessages = response.data.map(
        (commit) => commit.commit.message
      );
      const parsedCommits = parseCommits(commitMessages);
      await pushToJiraTempo(parsedCommits);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const parseCommits = (commitMessages) => {
    const parsedCommits = [];
    commitMessages.forEach((message) => {
      const match = message.match(/\[(\w+)\],\[(\d+)\],\[(.*)\]/);
      if (match) {
        parsedCommits.push({
          ticket: match[1],
          time: match[2],
          message: match[3],
        });
      }
    });
    return parsedCommits;
  };

  const pushToJiraTempo = async (parsedCommits) => {
    parsedCommits.forEach((commit) => {
      axios.post(
        `${process.env.REACT_APP_JIRA_INSTANCE_URL}/rest/tempo-timesheets/3/worklog`,
        {
          issueKey: commit.ticket,
          timeSpentSeconds: commit.time * 60,
          comment: commit.message,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_JIRA_TEMP_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {commits.map((commit, index) => (
            <li key={index}>
              <p>
                Ticket: {commit.ticket}, Time: {commit.time} minutes, Message:{" "}
                {commit.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
