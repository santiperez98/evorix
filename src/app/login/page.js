import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  return (
    <>
    <Navbar />
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black">
      <LoginForm />
    </div>
    <Footer />
    </>
  );
}
