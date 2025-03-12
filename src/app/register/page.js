import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";


export default function RegisterPage() {
  return (
    <>
    <Navbar />
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-black">
      <RegisterForm
      className="bg-gradient-to-r from-gray-800 to-black" />
    </div>
    <Footer />
    </>
  );
}
