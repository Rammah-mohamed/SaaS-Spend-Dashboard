export type Tool = {
  id: string;
  name: string;
  category: string;
  monthly_cost: number | string;
  yearly_cost: number | string;
  renewal_date: string;
  departments: { name: string } | string;
};

export type License = {
  id: string;
  tool_id: string;
  user_id: string;
  is_active: boolean;
  tool: { id: string; name: string; monthly_cost: number };
  assigned_at: string;
  users: {
    full_name: string;
    email: string;
  };
};

export type ActiveLicense = {
  tool_id: string;
  assigned_at: string;
  tools: { id: string; name: string; monthly_cost: number };
};

export type Renewals = {
  name: string;
  monthly_cost: number;
  renewal_date: string;
  utilization: number;
  activeLicenses: number;
  totalLicenses: number;
  toolId: string;
};

export type LicensesWithTools = {
  tool_id: string;
  is_active: boolean;
  tools: {
    id: string;
    name: string;
    category: string;
    department_id: string;
    departments: {
      name: string;
    }[];
  };
};
