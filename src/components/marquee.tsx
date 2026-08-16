const marqueeItems = [
  { text: "WordPress _", stroke: false },
  { text: "React.js", stroke: true },
  { text: "Shopify _", stroke: false },
  { text: "Next.js", stroke: true },
  { text: "Webflow _", stroke: false },
  { text: "WordPress _", stroke: true },
  { text: "React.js", stroke: false },
  { text: "Shopify _", stroke: true },
  { text: "Next.js _", stroke: false },
  { text: "Webflow", stroke: true },
];

const Marquee = () => {
  return (
    <div className="marquee section-pt">
      <h2>
        <span className="marquee-wrapper">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="marquee-title">
              {marqueeItems.map((item, index) => (
                <span
                  key={index}
                  className={item.stroke ? "text-stroke-black" : ""}
                >
                  {item.text}&nbsp;
                </span>
              ))}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
};

export default Marquee;
