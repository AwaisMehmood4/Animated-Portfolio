import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Theme";
import GlobalStyle from "./globalStyle";


//components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPAhe from "./components/WorkPage";
import MySkillPage from "./components/MySkillPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponent/SoundBar";

function App() {
  const location = useLocation();
  return <>
    <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
      <SoundBar />
      {
        // for framer-motion animation on page change!
      }
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/blog' component={BlogPage} />
            <Route exact path='/work' component={WorkPAhe} />
            <Route exact path='/skills' component={MySkillPage} />
          </Switch>
        </AnimatePresence>
        
      </ThemeProvider>
    </>
    
}

export default App

