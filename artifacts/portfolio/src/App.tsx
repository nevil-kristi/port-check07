import { Route, Switch, Router as WouterRouter } from 'wouter';
// @ts-ignore - plain JSX ported from the original Next.js app
import Navbar from '@/components/site/Navbar';
// @ts-ignore - plain JSX ported from the original Next.js app
import Footer from '@/components/site/Footer';
// @ts-ignore - plain JSX ported from the original Next.js app
import Home from '@/pages/Home';
// @ts-ignore - plain JSX ported from the original Next.js app
import Projects from '@/pages/Projects';
// @ts-ignore - plain JSX ported from the original Next.js app
import Contact from '@/pages/Contact';
// @ts-ignore - plain JSX ported from the original Next.js app
import Blogs from '@/pages/Blogs';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogs" component={Blogs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div className="w-[100%] md:w-[700px] m-auto">
        <Navbar />
        <Router />
        <Footer />
      </div>
    </WouterRouter>
  );
}

export default App;
