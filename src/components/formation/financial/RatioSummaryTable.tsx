
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ratioSummaries, RatioSummary } from '@/data/courses/financial-ratios/summarySection';
import { List } from 'lucide-react';

const RatioSummaryTable = () => {
  return (
    <div className="ratio-summary-table mt-4">
      <div className="mb-6 flex items-center gap-2 text-swiss-dark">
        <List size={24} className="text-swiss-blue" />
        <h3 className="text-xl font-semibold">Résumé des correspondances entre les comptes et les ratios</h3>
      </div>
      
      <Table className="border rounded-md">
        <TableHeader className="bg-swiss-blue/10">
          <TableRow>
            <TableHead className="w-1/2 font-semibold text-swiss-dark">Ratios</TableHead>
            <TableHead className="w-1/2 font-semibold text-swiss-dark">Comptes utilisés</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ratioSummaries.map((ratio: RatioSummary, index: number) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-swiss-muted/20" : ""}>
              <TableCell className="font-medium">{ratio.name}</TableCell>
              <TableCell>{ratio.accounts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RatioSummaryTable;
