import ContentLoader from 'react-content-loader';

const SkeletonFullPizza = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 292 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="146" cy="146" r="135" />
        <rect x="0" y="309" rx="0" ry="0" width="280" height="36" />
        <rect x="0" y="361" rx="0" ry="0" width="90" height="35" />
        <rect x="0" y="417" rx="15" ry="15" width="97" height="39" />
    </ContentLoader>
);

export default SkeletonFullPizza;
