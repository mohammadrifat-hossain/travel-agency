import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const textColor = dark ? "text-white" : "text-black";

  return (
    <div className={`mb-10 sm:mb-14 md:mb-16 ${alignClass} ${className}`}>
      {subtitle && (
        <span className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary mb-2 sm:mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold ${textColor} tracking-tight leading-[1.15]`}
      >
        {children}
      </h2>
    </div>
  );
}
