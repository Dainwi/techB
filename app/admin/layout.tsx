export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Admin Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}