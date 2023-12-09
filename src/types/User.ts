import { Timestamp } from 'firebase-admin/firestore';

type Operation = {
  active: string;
  entry: number;
  profit: number;
  time: string;
  win: boolean | null;
};

type BalanceTrack = {
  balance: number;
  time: string;
};

export type User = {
  id: string;

  email: string;
  transacted: number;

  licenseUntil: Timestamp;

  broker: {
    email: string;
    password: string;
    ssid: string;
  };

  status: string;

  isActive: boolean;

  realBalance: number;
  demoBalance: number;

  config: {
    mode: 'real' | 'demo';

    trader: string;

    entry: number;

    gales: number;
    galeMultiplier: number;

    stopWin: number;
    stopLoss: number;

    broker: 'dayprofit' | 'iqoption';
  };

  operations: Operation[];
  balanceTrack: BalanceTrack[];
};