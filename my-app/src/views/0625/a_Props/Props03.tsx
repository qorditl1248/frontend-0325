import React from 'react'

/*
! 두 개의 컴포넌트 구성

UserProfile 컴포넌트
: 두 가지 props를 전달 받음
  - username: 문자열
  - age: 숫자
  >> 이름과 나이를 전달받고 '안녕하세요, {username}님, 당신의 나이는 {age}살 입니다.
  >> 출력을 하는 텍스트 디자인: 폰트 굵기(굵게 bold), 컴포넌트 margin(10px)

Message 컴포넌트
: 하나의 props를 전달 받음
  - text: 문자열
  >> 메시지를 단순하게 화면에 표시
    '오늘도 좋은 하루 되세요'
  >> 텍스트 색깔: green, margin: 5px
  >> 해당 컴포넌트에 전달되는 값이 없는 경우 '전달 내용이 없습니다' 라고 출력  

! 부모 컴포넌트(Props03)
: UserProfile과 Message 컴포넌트를 사용하여 사용자 프로필과 환영 메시지를 표시

*/

type UserProfileType = {
  username: string;
  age: number;
}


const UserProfile = ({username, age}: UserProfileType) => {

  const style = {
    fontWeight: "bold",
    margin: '10px'
  }

  return (
    <div style={style}> 
      안녕하세요. {username}님, 당신의 나이는 {age}살 입니다.
    </div>
  )
}


type MessageType = {
  text: string;
}


function Message ({text}: MessageType ) {

  const style = {
    color: "green",
    margin: "5px"
  }

  return (
    <div style={style}>{text}</div>
  )
}

Message.defaultProps = {
  text: "전달내용이 없습니다."
}

export default function Props03() {
  return (
    <>
      <div>
        <UserProfile username='이승아' age={50}/>
        <Message text='오늘도 좋은 하루 보내세요'/>
        <Message/>
      </div>
    </>
  );
}