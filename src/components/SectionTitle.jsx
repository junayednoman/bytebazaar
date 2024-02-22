

const SectionTitle = ({ text, align }) => {
    return (
        < >
            <h3 className="font-medium md:text-3xl text-2xl capitalize mb-5" style={{ textAlign: align ? align : '' }}>{text}</h3>
        </>
    );
};

export default SectionTitle;