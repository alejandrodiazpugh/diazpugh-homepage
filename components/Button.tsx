import React from 'react';

type Props = {
	content: string;
	colorClasses: string;
};

export default function Button({ content, colorClasses }: Props) {
	const className = `${colorClasses} h-20 w-48 md:h-28 md:w-64 shadow-md tracking-widest rounded-3xl border-2 md:text-xl transition-all font-sourceCode`;
	return <button className={className}>{content}</button>;
}
