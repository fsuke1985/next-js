export const CaseStudy = (props) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src="images/profile.jpg" alt="profile" /> 
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        CASE STUDY
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                    <p className="mt-2 text-gray-500">Getting .... </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Spacing  = () => {
    return (
        <div className="">{/*SPACING*/}</div>
    );
}
const Episodes = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap">
                <span className="absolute bg-black text-white rounded-full h-12 w-12 items-center justify-center p-8" >Dec 28<br/>2020
                </span>
                <div className="flex-auto items-center p-8">292: Two Chickens, One Stone (hak)</div>
                <div className="flex-auto items-center font-medium mt-2 text-gray-500 leading-tight">Hakuro Matsuda さんをゲストに迎えて、Snapdragon 888, Stadia, スマートホーム、cyberpunk 2077 などについて話しました。</div>
            </div>
        </div>
    );
}

export default Episodes;
