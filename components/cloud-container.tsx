import type React from "react"

interface CloudContainerProps {
  children: React.ReactNode
  className?: string
}

export function CloudContainer({ children, className = "" }: CloudContainerProps) {
  return (
    <div
      className={`relative bg-white bg-opacity-95 p-8 rounded-[40px] shadow-lg ${className}`}
      style={{
        borderRadius: "60px",
        filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
      }}
    >
      {/* 雲形の装飾 - 上部 */}
      <div className="absolute -top-[20px] left-[10%] w-[20%] h-[40px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -top-[15px] left-[35%] w-[30%] h-[30px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -top-[20px] right-[10%] w-[20%] h-[40px] bg-white rounded-[50%] z-[-1]"></div>

      {/* 雲形の装飾 - 下部 */}
      <div className="absolute -bottom-[20px] left-[10%] w-[20%] h-[40px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -bottom-[15px] left-[35%] w-[30%] h-[30px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -bottom-[20px] right-[10%] w-[20%] h-[40px] bg-white rounded-[50%] z-[-1]"></div>

      {/* 雲形の装飾 - 左側 */}
      <div className="absolute -left-[20px] top-[10%] h-[20%] w-[40px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -left-[15px] top-[35%] h-[30%] w-[30px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -left-[20px] bottom-[10%] h-[20%] w-[40px] bg-white rounded-[50%] z-[-1]"></div>

      {/* 雲形の装飾 - 右側 */}
      <div className="absolute -right-[20px] top-[10%] h-[20%] w-[40px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -right-[15px] top-[35%] h-[30%] w-[30px] bg-white rounded-[50%] z-[-1]"></div>
      <div className="absolute -right-[20px] bottom-[10%] h-[20%] w-[40px] bg-white rounded-[50%] z-[-1]"></div>

      {children}
    </div>
  )
}

