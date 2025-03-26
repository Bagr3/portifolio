import React from 'react';

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 w-full bg-opacity-80 backdrop-blur-sm z-10 px-6 py-4">
			<nav className="flex justify-between items-center max-w-6xl mx-auto">
				<div className="font-bold text-xl">Seu Nome</div>
				<div className="flex gap-8">
					<a href="#home" className="hover:text-orange-400 transition-colors">Início</a>
					<a href="#tech" className="hover:text-orange-400 transition-colors">Tecnologias</a>
					<a href="#about" className="hover:text-orange-400 transition-colors">Sobre mim</a>
					<a href="#contact" className="hover:text-orange-400 transition-colors">Contato</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;