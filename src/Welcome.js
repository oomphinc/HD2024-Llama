import "./Welcome.css";
import logo from "./MainLogo.jpg";

const Welcome = () => {
  return (
    <div className="app">
      <header>
        <img src={logo} className="app__logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#documentation">Documentation</a>
            </li>
            <li>
              <a href="#call-to-action">Get Started</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Github Commits to JIRA/Tempo Integration</h1>
          <p>
            Streamline your workflow by connecting your GitHub commits to JIRA
            and Tempo.
          </p>
          <button>Get Started</button>
        </section>
        <section id="features" className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Automatically log GitHub commits in JIRA</li>
            <li>Track time spent on issues in Tempo</li>
            <li>Seamless integration with existing workflows</li>
          </ul>
        </section>
        <section id="documentation" className="documentation">
          <h2>Documentation</h2>
          <ul>
            <li>Sign up to get access to Llama Log.</li>
            <li>Add the Llama Log package to your project.</li>
            <li>
              Start development and make some commits in the documented format.
            </li>
            <li>Push your commits to your repo.</li>
            <li>Watch your commit messages magically appear in Tempo!</li>
          </ul>
        </section>
        <section id="call-to-action" className="call-to-action">
          <h2>Start integrating today!</h2>
          <button>Sign Up</button>
        </section>
      </main>
      <footer>
        <p>
          &copy; 2024 Github Commits to JIRA/Tempo Integration.{" "}
          <a href="https://www.oomphinc.com/" target="_blank" rel="noreferrer">
            Oomph, Inc.
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Welcome;
