export function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8 text-center text-muted-foreground border-t border-border">
      <p className="text-sm">
        &copy; {currentYear} Alwan Haris Farrasi.
      </p>
    </div>
  );
}
