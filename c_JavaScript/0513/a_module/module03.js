//& 자바스크립트 모듈 해석 과정

// - 모듈 사용 시 모듈 로더는 주어진 모듈 식별자를 해석하여 실제 파일 경로로 변환하는 과정 거침

//! 모듈 해석 과정 이해하기
// 모듈 해석은 자바스크립트 엔진이나 런타임 환경(Node.js, 브라우저 등)에서 모듈의 위치를 찾아내는 과정

// 1. 모듈 식별자 파싱: import 또는 require() 문에서 사용된 모듈 식별자(파일 경로, 패키지 이름 등)를 분석

// 2. 경로 해석: 식별자를 기반으로 실제 파일 시스템의 경로를 결정

// 3. 파일 로드: 해석된 경로에서 파일을 찾아 로드

// 4. 캐싱: 한 번 로드된 모듈은 캐시에 저장되어, 같은 모듈이 다시 요청될 때 빠르게 로드 가능

//! 경로 및 파일 해석 로직

// 1. 상대 경로 및 절대 경로
// 상대 경로 (./, ../ 시작)

// ./ :해당 모듈이 위치한 디렉토리(폴더) 내의 환경 
// ../ : 해당 모듈이 위치한 디렉토리(폴더)의 부모 디렉토리 환경 

// EX) ./ ../ 
// EX) './practice01/mathUtils.js'
// EX) b_CSS의 0419 디렉토리 내로 이동 '../../../b_CSS/0419'

// : 현재 파일의 위치를 기준으로 모듈의 위치를 해석
// 예: import { add } from './utils/math.js';

// 절대 경로 (/ 시작 또는 프로토콜 포함 URL)
// : 루트 디렉터리나 특정 프로토콜을 기준으로 모듈의 위치를 해석

// 예: import { add } from '/lib/utils/math.js';
// 웹 URL 사용 예: import { add } from 'https://example.com/scripts/math.js';

//& package.json 파일 생성: Node.js 프로젝트의 설정과 종속성 관리
// : 해당 디렉토리를 module을 사용할 수 있는 타입으로 지정 
// >> 해당 프로젝트의 모든 JS 파일들을 ES 모듈로 처리 가능 

// 원하고자 하는 디렉토리 터미널에서 
// npm init 
// : package.json을 자동 생성하는 명령어 

// npm init -y
// : 프로젝트의 이름, 버전, 진입점 등의 질문을 기본 답변으로 package.json 파일응ㄹ 빠르게 생성해주는 명령어
