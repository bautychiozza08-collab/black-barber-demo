import "./Button.css";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: Props) {
  return (
    <a
      href={href}
      className={`btn ${variant === "secondary" ? "btn-secondary" : ""}`}
    >
      {children}
    </a>
  );
}