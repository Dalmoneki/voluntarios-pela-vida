import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Column {
  key: string
  label: string
}

interface ResponsiveTableProps {
  columns: Column[]
  data: Record<string, string | number>[]
}

export function ResponsiveTable({ columns, data }: ResponsiveTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  <div className="md:hidden font-bold">{column.label}</div>
                  <div>{row[column.key]}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

