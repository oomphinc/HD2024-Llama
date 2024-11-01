import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";

function App() {
  const [parsedCommits, setParsedCommits] = useState([]); // New state variable
  const [loading, setLoading] = useState(false);

  const fetchCommits = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/repos/oomphinc/HD2024-Llama/commits`
      );
      const commitMessages = response.data.map(
        (commit) => commit.commit.message
      );

      const parsedCommits = parseCommits(commitMessages);
      setParsedCommits(parsedCommits); // Update state variable
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCommits();
  }, [fetchCommits]);

  const parseCommits = (commitMessages) => {
    const parsedCommits = [];
    commitMessages.forEach((message) => {
      const match = message.match(/(\w+-\d+)\|(\d+)\|(.*)/);
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

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="results">
          <h3>
            And so everyone can see that we are actually doing something with
            Github commits...
          </h3>
          <ul>
            {parsedCommits.map(
              (
                commit,
                index // Use parsedCommits state variable
              ) => (
                <li key={index}>
                  <p>
                    Ticket: {commit.ticket}, Time: {commit.time} minutes,
                    Message: {commit.message}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
