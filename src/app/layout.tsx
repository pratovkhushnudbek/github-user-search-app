import Header from "@/components/header";
import "./globals.css";
import Form from "@/components/Form";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Header/>
          <Form/>
        </div>
      </body>
    </html>
  );
}
