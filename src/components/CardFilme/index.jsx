export default function CardFilme(){
    return(
        <div className="w-[350px] h-[280px] flex flex-col rounded-lg bg-[#222222]">
            <div className="w-full h-[70%] rounded-t-lg">
                <img
                className="w-full h-full rounded-t-lg object-cover"
                src="https://m.media-amazon.com/images/S/pv-target-images/dcec5ce7e595f0b85c41b763a9f614c1f3cedfa9f64a7b884e15fc480930987b.jpg"
                alt=""
                />
            </div>
            <div className="w-full h-[30%] flex flex-col pt-2 px-4">
                <p className="text-[15px] font-bold">Love, Rosie</p>
                <p className="text-[15px] text-[#8a898c]">Christian Ditter</p>
                <div className="w ful flex justify-between">
                    <p className="text-[15px] text-[#8a898c]">2015</p>
                    <div className="px-2 py-0 rounded-lg bg-[#8f7bd8]/10">Comédia Romântica</div>
                </div>
            </div>
        </div>
    )
    
}