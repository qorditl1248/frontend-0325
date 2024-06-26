import React from 'react'

function Footer() {

  const styles = {
    footer: {
      width: "100%",
      height: "60px",
      backgroundColor: "#282c34",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem"  // 1rem = 16px
    }
  }

  return (
    <>
    <footer style={styles.footer}>
      강의명: 웹프론트엔드 | 강사명: 이승아 | 강의장: E강의실
    </footer>
    </>
  )
}

export default Footer