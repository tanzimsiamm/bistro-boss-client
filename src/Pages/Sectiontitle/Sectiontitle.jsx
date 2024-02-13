
const Sectiontitle = ({SubHeading,Heading}) => {
    return (
        <div className="text-center mt-16 mb-24">
            <p className="font-semibold text-lg text-orange-500">-----{SubHeading}-----</p>
            <p className="font-extrabold text-4xl text-red-600 uppercase">{Heading}</p>
        </div>
    );
};

export default Sectiontitle;