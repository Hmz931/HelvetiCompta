
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AccountItem } from '@/data/courses/fullChartOfAccounts';

interface AccountsListProps {
  accounts: AccountItem[];
  onAccountSelect: (account: AccountItem) => void;
  isLoading?: boolean;
}

const AccountsList = ({ accounts, onAccountSelect, isLoading = false }: AccountsListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-swiss-blue"></div>
      </div>
    );
  }

  if (accounts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Aucun compte trouvé avec ces critères.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-24 font-semibold text-swiss-dark">Numéro</TableHead>
            <TableHead className="font-semibold text-swiss-dark">Titre du compte</TableHead>
            <TableHead className="w-24 font-semibold text-swiss-dark text-center">Classe</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account, index) => (
            <TableRow 
              key={account.number} 
              onClick={() => onAccountSelect(account)} 
              className={`cursor-pointer hover:bg-gray-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
              }`}
            >
              <TableCell className="font-mono font-medium">{account.number}</TableCell>
              <TableCell>{account.title}</TableCell>
              <TableCell className="text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                  {account.category}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AccountsList;
