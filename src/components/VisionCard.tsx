import './VisionCard.css'

interface VisionProps {
  title: string;
  description: string;
  number: number;
  defaultImageURL: string;
  activeImageURL: string;
}

const VisionCard = ({ title, description, number, defaultImageURL, activeImageURL }: VisionProps) => {
  return (
    <div className="vision-card">
      <img
        src={defaultImageURL}
        onMouseEnter={(e) => {
          e.currentTarget.src = activeImageURL;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.src = defaultImageURL;
        }}
        alt={title}
      />
      <div className="number">{number}</div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default VisionCard;