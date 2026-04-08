import config from "../data/config.json";

export default function DonateButtons() {
  const amounts = [5, 15, 50, 100];
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {amounts.map((a) => (
        <a
          key={a}
          href={`${config.venmo}?txn=pay&amount=${a}&note=Besse%20Campaign`}
          className="btn-primary min-w-[90px] text-center"
        >
          ${a}
        </a>
      ))}
      <a href={config.venmo} className="btn-secondary min-w-[90px] text-center">
        Other
      </a>
    </div>
  );
}
