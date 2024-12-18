'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ExpandableCardProps {
  title: string
  content: string
  icon: React.ReactNode
}

export function ExpandableCard({ title, content, icon }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon}
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Recolher" : "Expandir"}
          >
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-gray-600">{content}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

