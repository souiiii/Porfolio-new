import Heading from "./Heading";

export default function App() {
  return <div className="parent">
    <div className="mainContainer">
        <div className="header"></div>
        <div className="content">
          <div className="box about">
            <Heading >About</Heading>
            <p className="description">Shahid is a passionate developer focused on building meaningful digital products.
              <br/>
              <br/>
His work blends thoughtful design and a deep love for solving real-world problems.</p>
          </div>
          <div className="subbox">

          <div className="box location"></div>
          <div className="box link"></div>
          </div>
          <div className="box work"></div>
          <div className="box skills"></div>
        </div>
        <div className="footer"></div>
    </div>
  </div>;
}