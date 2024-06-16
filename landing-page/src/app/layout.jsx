 
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/Components/Footer'
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="relative overflow-hidden">
          {children}
          <Footer/>
        </main>
       
      </body>
    </html>
  )
}
