const Article = () => {
    return(
        <article className="w-full h-full p-5 bg-white shadow-md">
            <h6 className={`text-2xl font-bold text-center`}>My Motto</h6>
            <div className={`flex flex-col justify-center items-center gap-5 mt-5 px-25`}>
                <p className={`text-lg text-gray-700 text-center break-keep`}>
                    저를 설명하는 키워드는 "성실함"과 "끈기", "창의력" 입니다. 저는 항상 맡은 일에 최선을 다하며, 어려운 상황에서도 포기치 않고 결국은 해내는 성격을 가지고 있습니다. 때때론, 창의력이 엉뚱한 방향으로 발휘되기도 하지만, 한번씩 획기적인 해결책을 제시 할 수 있습니다. 이러한 성실함과 끈기는 제가 어떤 프로젝트나 업무를 수행할 때 큰 장점으로 작용한다 생각합니다. 더불어, 대화하는 개발자로써 협업의 가치를 살리는 개발자가 되고자 합니다.
                </p>
            </div>
        </article>
    );
};

export default Article;