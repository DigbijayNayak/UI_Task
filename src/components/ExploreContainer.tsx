import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div>
      <div>
        <strong style={{marginLeft: "16px"}}>{name}</strong>
      </div>
      
    </div>
  );
};

export default ExploreContainer;
