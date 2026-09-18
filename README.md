# 폰트어썸 반영하기
1. 패키지 설치   
 - npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome   

2. CSS 설정 오류 방지하기   
 - 최상단 컴포넌트에 해당 코드 반영   

```
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // 자체 CSS 중복 로드 방지
```   

3. 컴포넌트에 사용하기   
 - 예시   
 ```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <div>
      <FontAwesomeIcon icon={faCheck} size="lg" color="green" />
    </div>
  )
}
 ```   

+++ 추가 사항
없는 아이콘의 경우 패키지 추가 설치가 필요하다.

```
npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```   
=====   


# 스와이퍼 공식문서    
 - https://swiperjs.com/react