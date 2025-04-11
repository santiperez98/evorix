"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { FaFileInvoiceDollar, FaRocket, FaRobot } from "react-icons/fa";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/auth/me", { withCredentials: true })
      .then((res) => {
        if (res.data.role?.toLowerCase() !== "user") {
          router.replace("/");
        } else {
          setUser(res.data);
        }
      })
      .catch(() => {
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await axios.post("http://localhost:3001/api/auth/logout", {}, { withCredentials: true });
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-cyan-400 font-orbitron">
        Cargando tu universo EVORIX...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-cyan-200 font-orbitron px-6 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 border-b border-cyan-700 pb-4">
        <h1 className="text-4xl tracking-widest text-cyan-400">EVORIX USER PANEL</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FiLogOut /> Salir
        </button>
      </header>

      {/* Bienvenida */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl mb-2">¡Hola, {user.name}!</h2>
        <p className="text-cyan-300">Bienvenido a tu centro de operaciones. Aquí podrás gestionar tu actividad en EVORIX.</p>
      </motion.section>

      {/* Tarjetas */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          {
            icon: <FaRocket className="text-3xl" />,
            title: "Mis Servicios",
            desc: "Explorá los servicios disponibles o contratados.",
            color: "hover:shadow-cyan-500/50",
          },
          {
            icon: <FaFileInvoiceDollar className="text-3xl" />,
            title: "Facturación",
            desc: "Visualizá tus facturas y estado de pagos.",
            color: "hover:shadow-pink-500/50",
          },
          {
            icon: <FaRobot className="text-3xl" />,
            title: "Soporte",
            desc: "Contactá a nuestro equipo o generá un ticket.",
            color: "hover:shadow-yellow-400/50",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`bg-zinc-900 backdrop-blur-md border border-cyan-600 p-6 rounded-xl transition ${card.color} shadow-md`}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4 text-cyan-400">{card.icon}</div>
            <h3 className="text-xl mb-2">{card.title}</h3>
            <p className="text-sm text-cyan-300">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Facturación ficticia formal */}
      <section className="mb-12">
        <h3 className="text-2xl mb-4">📄 Tus Facturas (demo)</h3>
        <div className="bg-zinc-800 border border-cyan-700 p-4 rounded-lg">
          <p className="text-sm text-cyan-400 mb-2">Historial de facturación:</p>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-cyan-500 border-b border-cyan-600">
                <th>ID</th>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "F-0001", concepto: "Servicio Web Básico", monto: "$15.000", fecha: "03/04/2025", estado: "Pagado" },
                { id: "F-0002", concepto: "Hosting Pro", monto: "$8.000", fecha: "10/02/2025", estado: "Pendiente" },
              ].map((factura, i) => (
                <tr key={i} className="border-b border-cyan-800 hover:bg-zinc-700/30">
                  <td>{factura.id}</td>
                  <td>{factura.concepto}</td>
                  <td>{factura.monto}</td>
                  <td>{factura.fecha}</td>
                  <td className={factura.estado === "Pagado" ? "text-green-400" : "text-yellow-400"}>
                    {factura.estado}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-zinc-400 mt-4 italic">
            * Este comprobante es una vista previa informativa. No constituye factura fiscal válida.
          </p>
        </div>
      </section>
    </div>
  );
}
