/**
 * FeaturesItem component.
 * @param {Object} props - The component props.
 * @param {string} props.icon - The icon of the feature.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @returns {JSX.Element} FeaturesItem component.
 */
export default function FeaturesItem({ icon, title, description }) {
  return (
    <div className='feature-item'>
      <img alt='Chat Icon' className='feature-icon' src={icon} />
      <h3 className='feature-item-title'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
