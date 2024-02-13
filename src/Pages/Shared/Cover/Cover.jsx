import { Parallax} from 'react-parallax';

const Cover = ({title,img}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero h-[650px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">Would you like to try a dish</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;