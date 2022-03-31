import Cover from './components/Cover';
import Intro from './components/Intro';
import ViewOne from './components/ViewOne';
import CalendarExample from './components/CalendarExample';
import Calendar from './components/Calendar';
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';
import { ContentForm } from './components/ContentForm';
import Mountain from './components/mountain';
import ContactForm from './components/ContactForm';
import Update from './components/Update';
import Navbar from './components/Navbar';
import CreateDesign from './components/CreateDesign';
import Video from './components/Video'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/calendar/entry/update/:id">
            <Update />
          </Route>
          <Route exact path="/calendar/entry/:id">
            <Link to="/">Home</Link>
            <ViewOne />
          </Route>
          <Route exact path='/calendar'>
            <Calendar />
          </Route>
          <Route exact path="/calendar/entry">
            <ContentForm />
          </Route>
          <Route exact path='/contact'>
            <ContactForm />
          </Route>
          <Route exact path='/'>
            <Intro />
            <Cover />
            <CalendarExample />
            <CreateDesign/>
          </Route>

          {/* <Route exact path = '/view/calendar'>
           
          </Route> */}
        </Switch>
        <Video />
        <Mountain />
      </div>

    </>
  );
}

export default App;


