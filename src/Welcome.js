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
              <a href="#features">Challenge</a>
            </li>
            <li>
              <a href="#solution">Solution</a>
            </li>
            <li>
              <a href="#documentation">Key Features</a>
            </li>
            <li>
              <a href="#call-to-action">Get Started</a>
            </li>
            <li>
              <a href="#post">Technichal Solution Post</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h1>Llama Log, Automate time, amplify productivity.</h1>
          <p>
            Revolutionizing time tracking by seamlessly connecting GitHub and
            Jira Tempo
          </p>
        </section>
        <section id="features" className="features">
          <h2>Challenge</h2>
          <p>
            GitHub users often struggle with manual time tracking, leading to
            inefficiencies and wasted hours. The process is prone to errors, and
            valuable time is lost searching for projects, tasks and
            repositories. The Llama team sought to bridge this gap by developing
            an intuitive tool that integrates Llama AI with Jira Tempo.
          </p>
        </section>
        <section id="solution" className="solution">
          <h2>Solution</h2>
          <p>
            Our React application successfully integrates GitHub commits with
            JIRA Tempo timesheets, automating the process and reducing errors.
          </p>
        </section>

        <section id="documentation" className="documentation">
          <h2>Key Features</h2>
          <ul>
            <li>
              <p>
                <strong>Effortless Time Tracking</strong> Log hours directly
                from GitHub.
              </p>
            </li>
            <li>
              <p>
                <strong>Smart Task Management</strong> Llama AI generates tasks
                from commits.
              </p>
            </li>
            <li>
              <p>
                <strong>Seamless Integration</strong> Real-time syncing with
                Jira Tempo.
              </p>
            </li>
          </ul>
        </section>
        <section id="post" className="post">
          <h2>Technichal Solution</h2>
          <p>
            <a href="https://docs.google.com/document/d/1Huw85Njwlk28GV3V2Hnw9bbKI11icwCgHcmm8FJM3Ls/edit?tab=t.e96he0jwsler#heading=h.t0vflei4dsr">
              Read the technichal solution post (word document)
            </a>
          </p>
        </section>
        <section>
          <div className="call-to-action">
            <h2>Next Steps</h2>
            <ul>
              <li>Sign up to get access to Llama Log.</li>
              <li>Add the Llama Log package to your project.</li>
              <li>
                Start development and make some commits in the documented
                format.
              </li>
              <li>Push your commits to your repo.</li>
              <li>Watch your commit messages magically appear in Tempo!</li>
            </ul>
          </div>
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
