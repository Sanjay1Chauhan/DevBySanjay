import type { Service } from "@/lib/mockData/servicesData";
import AnimateHeight from "react-animate-height";

type PropsType = {
  service: Service;
  activeId: number | null;
  toggleItem: (id: number) => void;
};

const ServiceCard = ({ service, activeId, toggleItem }: PropsType) => {
  const isActive = activeId === service.id;
  return (
    <div
      className={`service-item ${isActive ? "is-active" : ""} wow fadeInUp`}
      data-wow-delay={`${0.3 + service.id * 0.2}s`}
      onClick={() => toggleItem(service.id)}
    >
      <div className="service-txt">
        <span className="service-thumb">{service.title}</span>
        <AnimateHeight duration={300} height={isActive ? "auto" : 0}>
          <ul className="service-panel">
            {service.features.map((feature, i) => (
              <li key={i}>+ {feature}</li>
            ))}
          </ul>
        </AnimateHeight>
      </div>
    </div>
  );
};

export default ServiceCard;
