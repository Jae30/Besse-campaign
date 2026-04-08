export default function Footer() {
  return (
    <footer className="bg-navy text-cream mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 text-center">
        <p className="font-extrabold text-2xl">Jose “Besse” Gonzalez</p>
        <p className="mt-2 opacity-80">Creating Positive Change for Everyone</p>
        <p className="mt-6 text-xs opacity-60">
          Paid for by the Committee to Elect Jose “Besse” Gonzalez. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
