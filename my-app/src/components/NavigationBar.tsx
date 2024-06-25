import { link } from 'fs';
import React from 'react'
import { NavLink } from 'react-router-dom';

function NavigationBar() {

  // 링크 주소를 저장하는 배열
  const links = [
    '/', '0621', '0624', '0625', '0626', '0627', '0628', '0629'
  ]

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      margin: '10px',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      
      {/* links 배열을 순회하면서 Link라는 컴포넌트 생성 */}
      { links.map(link => (
        <NavLink key={link} to={link} style={({isActive}) => ({
          textDecoration: 'none',
          color: isActive ? 'red' : 'black',
          fontWeight: isActive ? 'bold' : 'normal'
        })}>
          {link === '/' ? 'HOME' : link}
        </NavLink>
        ))
      }
    </div>
  )
}

export default NavigationBar;