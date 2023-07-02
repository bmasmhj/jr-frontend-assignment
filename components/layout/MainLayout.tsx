import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other head elements as needed */}
      </Head>
        <div className='bg-gray-100'>
            <NavBar />
            <main>{children}</main>
        </div>
    <Footer />
    </>
  );
};

export default MainLayout;
