"use client"

import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import type { ReactNode } from "react"

interface EnhancedButtonProps extends ButtonProps {
  children: ReactNode
  animate?: boolean
}

export function EnhancedButton({ children, animate = true, className = "", ...props }: EnhancedButtonProps) {
  if (!animate) {
    return (
      <Button className={className} {...props}>
        {children}
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={`transition-all duration-200 hover:shadow-lg ${className}`} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
