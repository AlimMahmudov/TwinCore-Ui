// components/ui/Button.tsx
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = "primary",
	disabled = false,
	className = "",
}) => {
	// Определяем классы по варианту
	const baseClasses =
		"flex items-center px-8 h-[42px] text-[14px] justify-center font-[500] text-white rounded-[8px] transition-all duration-200  ";

	const variantClasses = {
		primary: "bg-[#136ed6]  ",
		secondary: "bg-gray-600 hover:bg-gray-700 text-white",
		outline:
			"border border-[#28AC4D] text-[#28AC4D]  ",
	};

	const disabledClasses = disabled
		? "opacity-50 cursor-not-allowed"
		: "cursor-pointer";

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${baseClasses} ${variantClasses[variant]}   ${disabledClasses} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
