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
    let TitleHeader = props => {
        const { children, mes, ...args } = props;

        return (
            <div className="
                flex-auto
                truncate 
                border-b border-gray-200
                text-lg
                font-bold
                font-hel
            ">
                <h2 className="
                    pl-16 pt-2 pb-2
                ">
                    {children}
                </h2>
            </div>
        );
    };

    return (
        <div className="flex flex-col shadow border-white">
            <div className="flex flex-wrap relative bg-white">
                <span className="font-serif italic text-xs flex absolute bg-black text-white items-center justify-center rounded-full -top-6 -left-5 w-65px h-65px " >Dec 28<br/>2020</span>
                <TitleHeader>292: Two Chickens, One Stone (hak)</TitleHeader>
                <div className="flex-auto items-center bg-rebuild font-medium t ext-gray-500 leading-tight p-2 border border-white">Hakuro Matsuda さんをゲストに迎えて、Snapdragon 888, Stadia, スマートホーム、cyberpunk 2077 などについて話しました。</div>
            </div>
        </div>
    );
}

export default Episodes;
