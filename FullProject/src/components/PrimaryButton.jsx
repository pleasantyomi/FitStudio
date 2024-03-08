/* eslint-disable react/prop-types */
const PrimaryButton = ({ text, onClick, img, className }) => {
    return (
        <div>
            <button onClick={onClick} type="button" className={`${className}  bg-primary rounded-tl-md rounded-br-md flex justify-center items-end gap-2 text-black font-[500]`}>
                {text}
                {img}
            </button>
        </div>
    );
};
export default PrimaryButton;
