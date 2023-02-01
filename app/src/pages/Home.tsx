import { Navbar, Welcome, Services, Transactions, Footer } from "../components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}
