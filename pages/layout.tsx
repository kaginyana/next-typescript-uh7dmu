import { Children } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.Component;
}) {
  return (
    <html>
      <body>
        Layout
        {children}
      </body>
    </html>
  );
}
