
import React from 'react';
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type AccountInfo = {
  number: string;
  title: string;
  explanation: string;
  example?: string;
};

type AccountInfoDialogProps = {
  account: AccountInfo;
};

const AccountInfoDialog = ({ account }: AccountInfoDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className="inline-flex items-center justify-center rounded-full h-7 w-7 bg-blue-50 text-swiss-blue hover:bg-blue-100 transition-colors"
        >
          <Info size={16} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <span className="text-swiss-blue font-mono">{account.number}</span> - {account.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            Explications détaillées sur ce compte
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-1">Description</h4>
            <p className="text-gray-600">{account.explanation}</p>
          </div>
          {account.example && (
            <div>
              <h4 className="font-medium text-gray-800 mb-1">Exemples d'utilisations</h4>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                <pre className="text-gray-600 whitespace-pre-wrap text-sm">{account.example}</pre>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccountInfoDialog;
