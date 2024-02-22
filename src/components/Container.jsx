
const Container = ({ children }) => {
    return (
        <div className="xl:max-w-[1380px] xl:px-5 lg:px-10 md:px-6 px-3 mx-auto">
            {children}
        </div>
    );
};

export default Container;