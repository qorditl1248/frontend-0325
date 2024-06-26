import React from 'react'

function Header() {

  const styles = {
    header: {
      width: "100%",
      hight: "60px",
      backgroundColor: "#282c34",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem" // 웹사이트의 기본 크기값인 16 * 1.5
    },                   // style들은 객체로 만듬

  }

  return (
    <>
    <header style={styles.header}>
      웹 프론트엔드 강의 - React 수업 자료
    </header>
    </>
  )
}

export default Header;