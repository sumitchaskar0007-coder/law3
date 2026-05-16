import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingEnquiryButton from './components/FloatingEnquiryButton.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

// Blog
import Blog from './pages/Blog.jsx';
import BlogAdmin from './pages/admin/BlogAdmin.jsx';
import BlogDetail from './pages/BlogDetail.jsx';

// Forms
import Application from './pages/Application.jsx';

// Public pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Admission from './pages/Admission.jsx';
import Academics from './pages/Academics.jsx';
import Gallery from './pages/Gallery.jsx';
import Announcement from './pages/Announcement.jsx';
import Career from './pages/Career.jsx';
import LegalAid from './pages/LegalAid.jsx';
import Library from './pages/Library.jsx';
import MootCourt from './pages/MootCourt.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Facilities from './pages/Facilities.jsx';
import Udan from './pages/Udan.jsx';
import UdanBook from "./pages/UdanBook";
import Cells from './pages/Cells.jsx';
import Sitemap from './pages/Sitemap.jsx';
import GoverningBody from './pages/GoverningBody.jsx';
import CollaborationMou from './pages/CollaborationMou.jsx';
import ELectures from './pages/ELectures.jsx';
import StudentAchievements from './pages/StudentAchievements.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Programmes from './pages/Programmes.jsx';
import Events from './pages/Events.jsx';
import News from './pages/News.jsx';
import Placements from './pages/Placements.jsx';
import Team from './pages/Team.jsx';
import Testimonials from './pages/Testimonials.jsx';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import GalleryAdmin from './pages/admin/GalleryAdmin.jsx';
import AnnouncementAdmin from './pages/admin/AnnouncementAdmin.jsx';
import CareerAdmin from './pages/admin/CareerAdmin.jsx';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = React.useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">

        {/* Scroll to Top on Page Change */}
        <ScrollToTop />

        {/* Header */}
        <Header onEnquiryClick={() => setEnquiryOpen(true)} />

        {/* Main Routes */}
        <main className="flex-1">
          <Routes>

            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/faculty" element={<Team />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/legalaid" element={<LegalAid />} />
            <Route path="/library" element={<Library />} />
            <Route path="/moot" element={<MootCourt />} />
            <Route path="/moot-court" element={<MootCourt />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cells" element={<Cells />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/governing-body" element={<GoverningBody />} />
            <Route path="/collaboration-mou" element={<CollaborationMou />} />
            <Route path="/e-lectures" element={<ELectures />} />
            <Route path="/online-lectures" element={<ELectures />} />
            <Route path="/student-achievements" element={<StudentAchievements />} />
            <Route path="/student-achievement" element={<StudentAchievements />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="/campus-life" element={<Facilities />} />

            <Route path="/udan" element={<Udan />} />
            <Route path="/udan/:id" element={<UdanBook />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/application" element={<Application />} />

            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/gallery"
              element={
                <ProtectedRoute>
                  <GalleryAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/announcements"
              element={
                <ProtectedRoute>
                  <AnnouncementAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/careers"
              element={
                <ProtectedRoute>
                  <CareerAdmin />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/blogs"
              element={
                <ProtectedRoute>
                  <BlogAdmin />
                </ProtectedRoute>
              }
            />

            {/* ---------------- REDIRECTS ---------------- */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Enquiry Button */}
        <FloatingEnquiryButton onClick={() => setEnquiryOpen(true)} />

        {/* Enquiry Modal */}
        <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />

      </div>
    </AuthProvider>
  );
}
