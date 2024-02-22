

const FeaturedCategoryCard = ({ img, heading }) => {
    return (
        <div className="border-2 p-4 flex flex-col gap-3 rounded-md">
            <img src={img} alt="" />
            <h6 className="font-medium text-center capitalize">{heading}</h6>
        </div>
    );
};

export default FeaturedCategoryCard;