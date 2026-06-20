import React from "react";

interface MamuteLogoProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "icon";
  mode?: "light" | "on-dark" | "on-white" | "orange-only";
  size?: number | "auto";
}

export default function MamuteLogo({
  className = "",
  variant = "horizontal",
  mode = "light",
  size = "auto",
}: MamuteLogoProps) {
  // Brand colors:
  // Navy Blue: #003060, Orange: #f36420, White: #ffffff
  const isDarkBg = mode === "on-dark";
  const isWhiteBg = mode === "on-white";

  // Decide colors
  const textColor = isDarkBg
    ? "text-white"
    : isWhiteBg
      ? "text-[#003060]"
      : "text-mamute-dark";

  const subTextColor = isDarkBg
    ? "text-white/90"
    : isWhiteBg
      ? "text-[#003060]"
      : "text-mamute-accent";

  const orangeColor = "#f36420";

  // Official Mamute mascot artwork — vector paths extracted directly from
  // the brand's source logo file. fill-rule="evenodd" creates the negative
  // space (baby mammoth, ear line, eye) as true transparent cutouts, so it
  // automatically blends with whatever background sits behind the icon.
  const svgIcon = (
    <svg
      viewBox="19 241 387 291"
      className="w-full h-full"
      style={{ minWidth: size !== "auto" ? size : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        fill={orangeColor}
        d="M 21.664062 530.570312 C 21.664062 530.570312 19.703125 432.964844 24.992188 406.3125 C 30.285156 379.65625 71.835938 276.761719 167.871094 254.023438 C 219.222656 241.875 238.039062 243.832031 275.863281 243.246094 C 313.886719 242.65625 365.234375 243.246094 376.996094 321.25 L 368.765625 427.871094 C 351.515625 430.808594 335.640625 427.871094 329.371094 426.300781 L 329.566406 410.425781 C 329.566406 410.425781 331.917969 404.15625 323.097656 404.15625 C 314.277344 404.15625 275.667969 405.917969 275.667969 405.917969 C 275.667969 405.917969 278.214844 334.773438 246.660156 328.699219 C 246.660156 328.699219 273.707031 379.066406 264.105469 433.554688 C 264.105469 433.554688 233.332031 495.683594 235.097656 530.375 L 188.253906 530.375 C 188.253906 530.375 184.53125 482.945312 179.632812 471.96875 C 174.535156 460.992188 172.378906 441.980469 173.359375 439.238281 C 174.339844 436.492188 143.960938 437.472656 143.960938 437.472656 C 143.960938 437.472656 141.21875 422.1875 144.15625 416.699219 C 144.15625 416.699219 136.90625 415.328125 136.90625 431.984375 C 137.101562 448.644531 152.976562 450.605469 153.761719 455.308594 C 154.542969 460.011719 156.898438 474.710938 149.644531 483.335938 C 142.394531 491.960938 139.257812 507.636719 140.042969 530.175781 L 89.671875 530.175781 C 89.671875 530.175781 91.632812 476.476562 101.429688 472.164062 C 111.035156 467.851562 131.222656 471.574219 134.75 469.421875 C 138.472656 467.460938 137.296875 462.167969 137.296875 462.167969 L 92.023438 462.167969 C 92.023438 462.167969 65.367188 468.242188 67.71875 530.375 L 22.054688 530.375 Z M 368.566406 430.613281 C 367 450.605469 369.941406 473.339844 357.394531 490 C 349.554688 500.191406 335.835938 512.734375 316.238281 510.773438 C 283.898438 507.441406 266.847656 486.472656 265.085938 472.75 C 263.320312 459.03125 262.339844 429.632812 281.351562 430.417969 C 300.363281 431.003906 296.640625 436.101562 296.640625 441.195312 C 296.640625 446.097656 298.402344 487.648438 322.902344 480.589844 C 329.371094 478.828125 327.996094 472.75 328.78125 466.871094 L 329.371094 428.652344 C 343.675781 433.160156 359.355469 432.378906 368.566406 430.613281 Z M 368.566406 430.613281"
      />
      <path
        fillRule="evenodd"
        fill={orangeColor}
        d="M 317.609375 422.382812 C 317.609375 422.382812 345.832031 436.296875 375.820312 426.890625 C 384.441406 424.144531 393.261719 419.441406 401.496094 411.796875 C 401.496094 411.796875 346.027344 424.929688 325.253906 412.582031 C 320.355469 409.640625 320.15625 403.371094 322.117188 397.6875 L 303.890625 398.472656 C 303.890625 398.472656 303.695312 413.953125 317.609375 422.382812 Z M 317.609375 422.382812"
      />
      <path
        fillRule="evenodd"
        fill={orangeColor}
        d="M 374.839844 389.847656 C 374.839844 389.847656 374.839844 398.472656 373.46875 399.449219 C 373.46875 399.449219 398.554688 402.195312 403.648438 394.746094 C 403.648438 394.746094 382.875 400.039062 374.839844 390.042969 Z M 374.839844 389.847656"
      />
    </svg>
  );

  if (variant === "icon") {
    const iconWidth = size === "auto" ? "w-14 h-14" : "";
    return (
      <div
        className={`inline-block ${iconWidth} flex-shrink-0 ${className}`}
        style={size !== "auto" ? { width: size, height: size } : undefined}
      >
        {svgIcon}
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-28 h-24 mb-3">
          {svgIcon}
        </div>
        <div className="flex flex-col select-none">
          <span className={`font-sans font-black tracking-tight text-3xl sm:text-4xl leading-none ${textColor}`}>
            MAMUTE
          </span>
          <span className={`font-sans text-xs sm:text-sm font-extrabold tracking-[0.25em] ${subTextColor} uppercase mt-2`}>
            CASA E CONSTRUÇÃO
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <div className="w-16 h-12 sm:w-20 sm:h-16 flex-shrink-0">
        {svgIcon}
      </div>
      <div className="flex flex-col select-none">
        <span className={`font-sans font-black tracking-tight text-2xl sm:text-3xl leading-none ${textColor}`}>
          MAMUTE
        </span>
        <span className={`font-sans text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] ${subTextColor} uppercase leading-none mt-1`}>
          CASA E CONSTRUÇÃO
        </span>
      </div>
    </div>
  );
}
