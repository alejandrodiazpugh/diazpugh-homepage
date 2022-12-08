import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import nombre from '../public/images/ADP-07.png';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
	const BREAKPOINT: number = 767;
	// CHECK FOR WINDOW SIZE
	const getWindowDimensions = () => {
		if (typeof window === 'undefined') {
			//NEXT JS SSG CHECK
			return;
		}
		const { innerWidth: width } = window;
		return width;
	};
	// STATE
	const [navOpen, setNavOpen] = useState(false);
	const [windowDimension, setWindowDimension] = useState(
		getWindowDimensions()
	);

	// HANDLE CLICK FOR NAV
	const handleClick = () => {
		setNavOpen(!navOpen);
	};

	useEffect(() => {
		// UPDATE VALUE FOR WINDOW SIZE
		window.addEventListener('resize', () => {
			setWindowDimension(getWindowDimensions());
		});

		// CHECK FOR BREAKPOINT TO CLOSE THE NAVBAR
		const width = getWindowDimensions();
		if (width && width > BREAKPOINT) {
			setNavOpen(false);
		}
	}, [windowDimension]);

	return (
		<header className="fixed top-0 z-[3000] h-24 w-screen bg-white pr-10 font-sourceCode font-semibold uppercase shadow-md">
			<nav className="flex h-full w-screen items-center justify-between pr-10">
				<div>
					<Link href={'/'}>
						<Image
							className="relative w-64"
							priority
							src={nombre}
							alt=""
						/>{' '}
					</Link>
				</div>
				<button
					onClick={handleClick}
					className="flex justify-end lg:hidden"
				>
					{navOpen ? (
						<IoMdClose className="fill-blue" />
					) : (
						<GiHamburgerMenu className="fill-blue" />
					)}
				</button>
				<AnimatePresence>
					{navOpen ? (
						<motion.ul
							key={'navLinks'}
							initial={{ opacity: 0, scaleY: 0 }}
							animate={{ opacity: 1, scaleY: 1 }}
							transition={{
								type: 'tween',
								duration: 0.1,
							}}
							style={{ originY: 0 }}
							exit={{ scaleY: 0 }}
							className="absolute top-20 z-[9999] flex h-48 w-screen flex-col items-end justify-center gap-5 bg-white pr-10 text-blue shadow-md transition-all"
						>
							<li className="lg:transition-colors lg:hover:text-cyan">
								<Link href={'/'}>Inicio</Link>
							</li>
							<li className="lg:transition-colors lg:hover:text-cyan">
								<Link href={'/servicios'}>Servicios</Link>
							</li>

							<li className="lg:transition-colors lg:hover:text-cyan">
								<Link href={'/contacto'}>Contacto</Link>
							</li>
						</motion.ul>
					) : (
						<ul className="hidden w-screen flex-col items-end justify-center gap-10 text-blue lg:flex lg:flex-row lg:justify-end lg:pr-10">
							<li className="lg:transition-colors lg:hover:text-cyan">
								<Link href={'/'}>Inicio</Link>
							</li>
							<li className="lg:transition-colors lg:hover:text-cyan">
								<Link href={'/servicios'}>Servicios</Link>
							</li>

							<li className="lg:transition-colors lg:hover:text-cyan">
								<Link href={'/contacto'}>Contacto</Link>
							</li>
						</ul>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
