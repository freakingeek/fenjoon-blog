export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-5xl mx-auto mt-16">{children}</div>;
}
