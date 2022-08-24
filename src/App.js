import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';

import AboutIntro from './components/pages/about/AboutIntro';
import AboutDocument from './components/pages/about/AboutDocument';
import AboutHistory from './components/pages/about/AboutHistory';
import AboutLocation from './components/pages/about/AboutLocation';

// import AbroadSchedule from './components/pages/abroad/AbroadSchedule';
import AbroadProgram from './components/pages/abroad/AbroadProgram';
import AbroadSchool from './components/pages/abroad/AbroadSchool';
// import AbroadProcedure from './components/pages/abroad/AbroadProcedure';

import CommunityAnnouncement from './components/pages/community/CommunityAnnouncement';
import CommunityReview from './components/pages/community/CommunityReview';
import CommunityEntry from './components/pages/community/CommunityEntry';
import CommunityForum from './components/pages/community/CommunityForum';
import CommunityPolicy from './components/pages/community/CommunityPolicy';
import CommunityGallery from './components/pages/community/CommunityGallery';
// import CommunityItems from './components/pages/community/CommunityItems';

import CurriculumSchedule from './components/pages/curriculum/CurriculumSchedule';
import CurriculumProgram from './components/pages/curriculum/CurriculumProgram';
import CurriculumMenu from './components/pages/curriculum/CurriculumMenu';
import CurriculumLocation from './components/pages/curriculum/CurriculumLocation';
import CurriculumGuide from './components/pages/curriculum/CurriculumGuide';
import CurriculumApply from './components/pages/curriculum/CurriculumApply';
import CurriculumIntro from './components/pages/curriculum/CurriculumIntro';

import WalkinTour from './components/pages/walkin/WalkinTour';
import WalkinPickDrop from './components/pages/walkin/WalkinPickDrop';
import WalkinIntro from './components/pages/walkin/WalkinIntro';
import WalkinApply from './components/pages/walkin/WalkinApply';
import WalkinAfterschool from './components/pages/walkin/WalkinAfterschool';

import NavbarState from './context/navbar/navbarState';

import './App.css';

function App() {
  return (
    <NavbarState>
      <Router>
        <Navbar />
        <div className='all-center contents'>
          <Routes>
            {/* Home Page */}
            <Route exact path='/' element={<Home />} />
            {/* About Page */}
            <Route exact path='/about/intro' element={<AboutIntro />} />
            <Route exact path='/about/history' element={<AboutHistory />} />
            <Route exact path='/about/location' element={<AboutLocation />} />
            <Route exact path='/about/document' element={<AboutDocument />} />
            {/* Curriculum Page */}
            <Route
              exact
              path='/curriculum/intro'
              element={<CurriculumIntro />}
            />
            <Route
              exact
              path='/curriculum/guide'
              element={<CurriculumGuide />}
            />
            <Route
              exact
              path='/curriculum/apply'
              element={<CurriculumApply />}
            />
            <Route
              exact
              path='/curriculum/program'
              element={<CurriculumProgram />}
            />
            <Route
              exact
              path='/curriculum/location'
              element={<CurriculumLocation />}
            />
            <Route
              exact
              path='/curriculum/schedule'
              element={<CurriculumSchedule />}
            />
            <Route exact path='/curriculum/menu' element={<CurriculumMenu />} />
            {/* Walk-in Page */}
            <Route exact path='/walkin/apply' element={<WalkinApply />} />
            <Route exact path='/walkin/intro' element={<WalkinIntro />} />
            <Route exact path='/walkin/pickdrop' element={<WalkinPickDrop />} />
            <Route exact path='/walkin/tour' element={<WalkinTour />} />
            <Route
              exact
              path='/walkin/afterschool'
              element={<WalkinAfterschool />}
            />
            {/* Abroad Page */}
            <Route exact path='/abroad/school' element={<AbroadSchool />} />
            {/* <Route
              exact
              path='/abroad/procedure'
              element={<AbroadProcedure />}
            /> */}
            <Route exact path='/abroad/program' element={<AbroadProgram />} />
            {/* <Route
              exact
              path='/abroad/schedule'
              element={<AbroadSchedule />}
            />{' '} */}
            {/* Community Page */}
            <Route
              exact
              path='/community/announcement'
              element={<CommunityAnnouncement />}
            />
            <Route exact path='/community/entry' element={<CommunityEntry />} />
            <Route exact path='/community/forum' element={<CommunityForum />} />
            {/* <Route exact path='/community/items' element={<CommunityItems />} /> */}
            <Route
              exact
              path='/community/gallery'
              element={<CommunityGallery />}
            />
            <Route
              exact
              path='/community/policy'
              element={<CommunityPolicy />}
            />
            <Route
              exact
              path='/community/review'
              element={<CommunityReview />}
            />
          </Routes>
        </div>
        <Contact />
        <Footer />
      </Router>
    </NavbarState>
  );
}

export default App;
