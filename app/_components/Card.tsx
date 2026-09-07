// for the reuse by Card form Layout
import { ReactNode } from "react";

// type definition
type CardProps = {
    children: ReactNode;
    className?: string;
}

// 위에 선언한 타입으로 파라미터 받아오기
export default function Card({
    children,
    className = '',
}: CardProps){
    // 카드 레이아웃 마크업
    return (
        <div
            className={`
                rounded-2xl 
                bg-slate-900 
                p-6 
                shadow-lg 
                transition 
                duration-300 
                hover:-translate-y-2 
                hover:shadow-2xl 
                ${className}
            `}>
                {children}
        </div>
    );
}