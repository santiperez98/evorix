"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || user?.role !== "admin") {
      router.push("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 text-transparent bg-clip-text">
          Bienvenido al Panel de Administrador
        </h1>
        <p className="text-lg text-gray-300">Aquí podrás gestionar los contenidos de tu sitio.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
