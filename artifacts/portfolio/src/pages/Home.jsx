import ProjectsList from '@/components/site/ProjectsList';
import TechLists from '@/components/site/TechLists';
import About from '@/components/site/About';
import Profile from '@/components/site/Profile';
import Experience from '@/components/site/Experience';

export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                    <ProjectsList />
                    <TechLists />
                    <Experience />
                </main>
            </div>
        </>
    );
}
