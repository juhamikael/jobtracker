import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="flex justify-center gap-x-4 py-4">
        <Link className="hover:font-bold transition-all" href="/terms">
          Terms of Service
        </Link>
        <Link className="hover:font-bold transition-all" href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
