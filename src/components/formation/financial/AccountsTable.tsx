
import React from 'react';
import AccountInfoDialog, { AccountInfo } from './AccountInfoDialog';

type AccountsTableProps = {
  accounts: AccountInfo[];
  searchTerm: string;
};

const AccountsTable = ({ accounts, searchTerm }: AccountsTableProps) => {
  const filteredAccounts = accounts.filter(account => 
    account.number.includes(searchTerm) || 
    account.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (account.explanation && account.explanation.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (account.example && account.example.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border-b text-left font-semibold">Numéro</th>
            <th className="py-3 px-4 border-b text-left font-semibold">Libellé du compte</th>
            <th className="py-3 px-4 border-b text-center font-semibold w-24">Infos</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {filteredAccounts.length > 0 ? (
            filteredAccounts.map((account, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{account.number}</td>
                <td className="py-3 px-4">{account.title}</td>
                <td className="py-3 px-4 text-center">
                  <AccountInfoDialog account={account} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-4 px-4 text-center text-gray-500">
                Aucun compte ne correspond à votre recherche
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable;
