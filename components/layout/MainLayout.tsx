import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';
import Link from 'next/link';
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
      <div
        style={{
          zIndex: 99999
        }}
      className="md:hidden block fixed left-0 bg-white top-0 flex h-full w-full items-center justify-center bg-black  py-10">
          <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full">
              <div className="m-8 h-full max-w-[400px] mx-auto">
                <div className="mb-8">
                  <h1 className="mb-4 text-3xl font-extrabold">Prior Notification</h1>
                  <p className="text-gray-600">This website was created in a rush and, as a result, does not support mobile devices or have responsive design. For the best user experience, we recommend using a laptop or desktop computer.</p>
                </div>
                <div className="space-y-4">
                  <Link href='http://bimash.com.np/' className="p-3 bg-black rounded-full text-white w-full font-semibold">Ok , I understand</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-100'>
            <NavBar />
            <main>{children}</main>
        </div>
    <Footer />
    </>
  );
};

export default MainLayout;
