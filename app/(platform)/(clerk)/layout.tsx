const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
      {children}
    </div>
  );
};

export default layout;
