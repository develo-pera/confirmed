import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PagesLayout;