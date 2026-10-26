import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { ThemeProvider } from '@/lib/ThemeContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// Auth pages. /login, /forgot-password and /reset-password stay routed: the
// Base44 SDK's redirectToLogin() and its password-reset emails target them on
// this domain. They are unlinked from the marketing site and disallowed in
// robots.txt. Public self-registration (/register) is not offered.
import Login from '@/pages/Login';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

// Layout
import SiteLayout from '@/components/layout/SiteLayout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Industries from '@/pages/Industries';
import Resources from '@/pages/Resources';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import CaseStudies from '@/pages/CaseStudies';
import Platform from '@/pages/Platform';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import CookiePolicy from '@/pages/CookiePolicy';
import Vision from '@/pages/Vision';
import HSSupport from '@/pages/HSSupport';
import Pricing from '@/pages/Pricing';
import NotFound from '@/pages/NotFound';

const ServiceRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/solutions/${slug}`} replace />;
};

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-brand-dark">
        <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/hs-support" element={<HSSupport />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Services />} />
        <Route path="/solutions/:slug" element={<ServiceDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Legacy URLs — redirect to the canonical paths */}
        <Route path="/consultancy" element={<Navigate to="/hs-support" replace />} />
        <Route path="/services" element={<Navigate to="/solutions" replace />} />
        <Route path="/services/:slug" element={<ServiceRedirect />} />
        {/* Retired for launch — kept as redirects so existing links still land. */}
        <Route path="/platform-tour" element={<Navigate to="/contact?type=demo" replace />} />
        <Route path="/health-check" element={<Navigate to="/contact?type=demo" replace />} />
        <Route path="/register" element={<Navigate to="/contact?type=demo" replace />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;