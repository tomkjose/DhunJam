export interface AmountDetailsProps {
  amount: {
    category_6: number;
    category_7: number;
    category_8: number;
    category_9: number;
    category_10: number;
  };
}

export interface AmountCardProps {
  data: AmountDetails;
  chargeStatus: boolean;
}

export interface ChargeCardProps {
  chargeStatus: boolean;
  changeChargeStatus: (value: boolean | null) => void;
}

export interface AmountDetails {
  amount: {
    category_6: number;
    category_7: number;
    category_8: number;
    category_9: number;
    category_10: number;
  };
  charge_customers: boolean;
  id: number;
  location: string;
  name: string;
}

export interface AuthContextProps {
  user: any | null | undefined;
  signIn: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface GraphCardProps {
  dataValues: AmountDetails;
  amountCategory6: number;
  amountCategory7: number;
  amountCategory8: number;
  amountCategory9: number;
  amountCategory10: number;
}
