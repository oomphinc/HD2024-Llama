import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="hero">
          <h1>Github Commits to JIRA/Tempo Integration</h1>
          <p>
            Streamline your workflow by connecting your GitHub commits to JIRA
            and Tempo.
          </p>
          <button>Get Started</button>
        </section>
        <section class="features">
          <h2>Key Features</h2>
          <ul>
            <li>Automatically log GitHub commits in JIRA</li>
            <li>Track time spent on issues in Tempo</li>
            <li>Seamless integration with existing workflows</li>
          </ul>
        </section>
        <section class="call-to-action">
          <h2>Start integrating today!</h2>
          <button>Sign Up</button>
        </section>
      </main>
      <footer>
        <p>
          &copy; 2024 Github Commits to JIRA/Tempo Integration.{" "}
          <a href="https://www.oomphinc.com/" target="_blank">
            Oomph, Inc.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
