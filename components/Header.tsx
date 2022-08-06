import Image from 'next/image'
import headerStyles from '../styles/Header.module.css'
import logo from '../public/next.svg'
import { NextPage } from 'next'

const Header: NextPage = () => {
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