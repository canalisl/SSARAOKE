import styles from "./App.module.css";
import Login from "./components/user/Login";
import Navbar from "../src/components/layout/Navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import example1 from "./assets/example1.PNG";
import example2 from "./assets/example2.PNG";
import example3 from "./assets/example3.PNG";
import example4 from "./assets/example4.PNG";
import example5 from "./assets/example5.PNG";

import { AOS } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className={styles.itembg}>
      <Navbar />

      <Box container justifyContent="center">
        <h1 style={{ marginTop: 200, color: "powderblue" }}>
          Welcome to SSARAOKE
        </h1>
      </Box>

      <Box
        container
        justifyContent="center"
        marginTop="20px"
        marginBottom="200px"
      >
        <Login />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <img src={example1} alt="" />
      <br />
      <img src={example2} alt="" />
      <br />
      <img src={example3} alt="" />
      <br />
      <img src={example4} alt="" />
      <br />
      <img src={example5} alt="" />
    </div>
  );
}

export default App;
// style={{ backgroundImage: `url(${background})` }
