const Article = () => {
    return(
        <section className="bg-amber-50 px-15 py-30">
            <div className="flex flex-wrap justify-between gap-2 items-start">
                <h2 className="text-4xl font-bold">함께함의 가치</h2>
                <p className="pr-10 max-w-md text-2xl font-semibold">
                    성실함과 끈기로 맡은 일을 끝까지 해냅니다. 
                    <span className="text-green-800">대화와 협업의 가치를 살리는 개발자</span>
                    가 되고자 합니다.</p>
            </div>
        </section>
    );
};

export default Article;