import React, { FC } from 'react'
import Image from 'next/image'
import headerStyles from '../styles/Header.module.css'
import logo from '../public/next.svg'
import About from '../pages/about'

const Header: FC = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<Image src={logo} />
				<br/>
				<span>Business</span>News
			</h1>
			<p className={headerStyles.description}>Keep up to date with the latest news in business.</p>
		</div>
	)
}

export default Header