# nomadweather


1. nodejs 최신(stable버전 가능) 업데이트.
-명령어로 처리하거나, 버전이 너무낮아서 안되면 지우고 다시설치

2. expo설치
npm install --global expo-cli

3. expo 구글플레이서 앱도 설치하자.

4. cmd에서 expo init NomadWeather  명령을 입력(다운받고자 하는 경로로 미리이동할것)
입력 후 옵션이 뜨는데 빈 템플릿을 선택 후 엔터(그냥 엔터누르면 디폴트 빈템플릿)


5. 다운로드가 완료되면 ide로 열기

6. 소스들살펴보기

7. 터미널에서 npm start로 expo가 올라오는지 체크

8. expo에서 정상적으로 확인하기 위해선 일단 가입 및, 로그인이 필요함.
컨트롤c로 프로세스 종료 후 나간다음, expo login명령.

9. 그 다음 아이디와 비밀번호 입력 후 로그인 완료

10. npm start 터미널에 입력

11. 그 다음 앱에서 qr을 리딩하거나, 목록에 나온걸 클릭

12. 이때 오픈된 사이트 상에서 connection을 lan으로 두면 안될수 있음(방화벽같은건가?)

13. connection을 tunnel로 변경한다.  그리고 tunnel ready가 뜨면, 작동완료됨.

14. 이제 앱을 실행해보자! 즉시변경도 됨!

15. 콘솔(터미널)에 보면 안드로이드나 ios 오픈됬다고 뜸

16. 정상 작동하는지 확인해보자.

17. asyncstorage는 로컬스토리지 저장기능인데, 현재는 사라진 기능으로, 커뮤니티버전으로 사용할 수 있다.(이제 커뮤니티에 의존해야한다는 점.)
다운로드 받기 위해 아래 url로 이동한 다음 다운 및 설치를 진행한다.     https://github.com/ammarahm-ed/react-native-mmkv-storage
※ 그러나~ 이렇게 없어지는 api와 컴포넌트들을 대응하기 위해 expo팀은 sdk를 만들어서 배포한다. 더 많은 기능과 다양한 서비스가 제공되고 있다는
어마어마한 장점이 있다.  그러니 필요한 컴포넌트(사라진)들을 다운받아서 설치 후 쓰기보단 expo의 sdk를 사용하는것이 더 많은 기능을
사용할수 있고, 유용하다.

18. 사용자의 위치정보를 가져오기 위해, expo-location을 사용하자.
    expo install expo-location 터미널에 입력.
    
19. 그리고 중요한거, useState와 useEffect는 React와 함께 브레이스로 import하지말것! 오류남...